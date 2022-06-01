const {Mentor} = require('../models')


const getMentors = async (req, res) => {
    const mentors = await Mentor.findAll()
    res.status(200).send(mentors)
}

module.exports = {
    getMentors
}