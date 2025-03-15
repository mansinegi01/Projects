<<<<<<< HEAD
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
=======
const {verifyToken} = require("../services/auth") 

function userAuthentication(cookieName){
    return (req,res,next)=>{
        const cookieToken = req.cookies[cookieName];
        if(!cookieToken) {
            req.user = null
            return next();
        }
        
        try{
        const validateCookie = verifyToken(cookieToken) 
        req.user = validateCookie
        
        }
        catch(error){

        }
        return next()
    };
}

module.exports = {
    userAuthentication
>>>>>>> 82a68a2 (added blogg)
}