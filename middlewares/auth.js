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
}