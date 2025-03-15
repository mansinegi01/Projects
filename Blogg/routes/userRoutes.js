const express = require('express')
const router = express.Router();
const {getSignIn, getsignUp, postSignUp, postSignIn, getprofile} = require('../controllers/userRoutes')


router.get('/signin', getSignIn);
router.get('/signup', getsignUp);
router.get('/profile', getprofile);

router.post('/signup', postSignUp);
router.post('/signin', postSignIn);


module.exports = router;