require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(require('cookie-parser')())

app.use(require('./routes'))

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening ${process.env.PORT}`)
})