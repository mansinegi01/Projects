const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    blogId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "addBlog",
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "blogModel",
    }

},{timestamps : true})

const comment = mongoose.model("comment",commentSchema)

module.exports = comment;