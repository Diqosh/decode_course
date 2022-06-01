const mongoose = require('mongoose')
bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email : {
        type: String,
        unique: true
    },
    full_name: String,
    nickname: {
        type: String,
        unique: true
    },
    password: String,
    date:{
        type: Date,
        default: Date.now()
    },
    avatar: String
})

UserSchema.pre('save', function (next){

    let user = this

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


})

UserSchema.methods.verifyPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("User", UserSchema)