const {getUID} = require('../services/auth')

function restrict_logged_users(req,res,next) {
    const userID = req.cookies?.uid;
    if(!userID) return res.redirect('/login')

    const user = getUID(userID)
    if(!user) return res.redirect('/login')

    req.user = user;
    next();
}

function checkAuth(req,res,next) {
    const userID = req.cookies?.uid;
   

    const user = getUID(userID)
   

    req.user = user;
    next();
}

module.exports = {
    restrict_logged_users, checkAuth
}