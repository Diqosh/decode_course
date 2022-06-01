const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const path = require("path");
const LocalStrategy = require('passport-local')
const passport = require('passport')




passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function(email, password, done) {
        User.findOne({ email}, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            user.verifyPassword(password, (err, isMatch) =>{
                if(err) return done(err, false)
                if(!isMatch) return done(null, false)
                return done(null, user);
            })

        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/data/uploads/games')
    },
    filename: function (req, file, cb) {
        const filename = file.originalname
        let fileExt = filename.split('.')
        fileExt = fileExt[fileExt.length - 1]

        const uniqueSuffix = Date.now() + '.' + fileExt

        cb(null, uniqueSuffix)
    }
})

const upload = multer({storage: storage})


mongoose.connect('mongodb://localhost/epic_games').then(() => {
    console.log('connected to mongo db')
}).catch(() => {
    console.log('not connected to mongo db')
})
const Game = require("./models/Game.js")
const User = require("./models/User.js")
const app = express()

app.use(express.static(__dirname + '/public'))
app.use("/public", express.static('./public/'));
//body parser
app.use(express.urlencoded())
app.use(express.json())
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs")

app.get('', async (req, res) => {
    // Game.find().exec((error,games)=>{
    //     console.log(games)
    //     res.render("index.ejs",{
    //         games
    //     })
    // })
    const games = await Game.find().exec()
    res.render("index.ejs", {
        games,
        currentUser: req.user

    })

})

app.get('/game_add', (req, res) => {
    res.render('add_game.ejs')
})

app.post('/api/games', upload.single('image'), (req, res) => {

    new Game({
        title: req.body.name,
        price: req.body.price,
        description: "some description",
        img: "data/uploads/games/" + req.file.filename
    }).save((err, blog) => {
        res.redirect('/')
    })

})
app.delete('/api/games/:id', async (req, res) => {
    const game = await Game.findById(req.params.id).exec();
    try {
        fs.unlinkSync(path.join(__dirname, "/public", game.img))
    } catch (e) {
        console.log(e.message)
    }
    await Game.deleteOne({_id: req.params.id})
    res.status(200).end()
})

app.get('/api/games/', async (req, res) => {
    const games = await Game.find().exec()
    res.status(200).send(games)
})
app.put('/api/games', upload.single('image'), async (req, res) => {

    if (req.file) {
        const game = await Game.findById(req.body._id).exec()
        try {
            fs.unlinkSync(path.join(__dirname, "/public", game.img))
        } catch (e) {
            console.log(e.message)
        }

        game.title = req.body.title,
            game.price = req.body.price,
            game.img = "data/uploads/games/" + req.file.filename
        console.log(req.file.filename)
        await game.save()

    } else {
        await Game.updateOne({_id: req.body._id},
            {
                $set:
                    {
                        title: req.body.title,
                        price: req.body.price
                    }
            })
    }

    res.status(200).end()
})


app.get('/edit_game', async (req, res) => {
    const game = await Game.findById(req.query.id).exec()
    res.render('edit_game.ejs', {
        game
    })
})
app.get('/login', async (req, res) => {
    res.render('login.ejs')
})
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login?error=1' }),
    function(req, res) {
        console.log(req.user)
        res.redirect('/');
    });
app.get('/logout', (req, res) =>{
    req.logout()
    res.redirect('/')
})

app.get('/wishlist', (req, res) =>{
    res.render('wishlist.ejs')
})

app.get('/search', (req, res) =>{
    res.render('mainSearch.ejs')
})

app.get('/register', async (req, res) => {
    res.render('register.ejs')
})


function registrationValidator(req, res, next) {
    let {
        email,
        name,
        second_name,
        nickname,
        password,
    } = req.body

    if (!name || name.length < 2) return res.redirect("/register?error=1")
    if (!second_name || second_name.length < 2) return res.redirect("/register?error=2")
    if (!nickname || nickname.length < 2) return res.redirect("/register?error=3")
    if (!password || password.length < 2) return res.redirect("/register?error=4")
    if (!email || email.length < 2) return res.redirect("/register?error=5")

    next()
}

app.post('/api/users',registrationValidator, (req, res, next) => {
    new User({
        email: req.body.email,
        full_name: req.body.name + req.body.second_name,
        nickname: req.body.nickname,
        password: req.body.password,
    }).save((err, user)=>{
        if(err) return next(err)

        res.redirect('/login')
    })


})

app.get('api/auth/google/signin', passport.authenticate('google'))

app.get('api/auth/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.listen(3000, () => console.log("Server is listening"))


// new Game({
//     title: "RDR",
//     description: "some description",
//     price: 123
// }).save()
