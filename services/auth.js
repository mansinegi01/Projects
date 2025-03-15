const JWT = require("jsonwebtoken")
const secret = "1234567890qwertyuiop"

function tokenForUser(user){
    const payload = {
        _id : user._id,
        email : user.email,
        profileImage : user.profileImage,
        role : user.role
    }
    const token = JWT.sign(payload,secret);
    return token;
}


function verifyToken(token){
    const payload = JWT.verify(token,secret)
    return payload;
}

module.exports = {
    tokenForUser, verifyToken
}