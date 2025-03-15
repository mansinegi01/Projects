const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type : String,
        required : true,
    },
    visitedHistory : [{timestamp : {
        type : Number
    }}],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
            
    }
},
{timestamps : true})

const URL = mongoose.model("URL", userSchema)

module.exports = URL;