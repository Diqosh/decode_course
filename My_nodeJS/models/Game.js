const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    img: String,
    date:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Game", GameSchema)