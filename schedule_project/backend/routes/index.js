const express = require('express')
const router = express.Router()


router.use(require('./mentor'))
// router.use(require('./busy_in_week'))
// router.use(require('./course'))
// router.use(require('./lesson_in_week'))
// router.use(require('./room'))



module.exports = router