const express = require("express")
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/astana_hub')
    .then(()=>{
        console.log('connected to mongo')
    }).catch(()=>{
        console.log('not connected to mongo')
})

const app = express()
app.set("view engin","ejs")


app.get('/', (req, res) =>{
    console.log("Api works")

    res.render("index.ejs")
})

app.listen(3000 , ()=>{
    console.log("server listening")
})

const Blog = require("./models/blog")
new Blog({
    title: "first blog",
    description: "first desc"
}).save();