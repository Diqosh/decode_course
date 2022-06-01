const express = require('express')
const router = express.Router()

const {getMentors} = require("../controllers/mentor.controller");


router.get('/api/mentors', getMentors)

module.exports = router