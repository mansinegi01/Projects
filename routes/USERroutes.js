const express = require('express')
const router = express()

const {handleSignUP, handleLogin} = require('../controllers/USERroutes')

router.post('/', handleSignUP)
router.post('/login', handleLogin)

module.exports = router;