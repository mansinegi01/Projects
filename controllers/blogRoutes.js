const addBlog = require('../models/addBlog')
const comment = require('../models/comments')

function getAddBlog(req,res){
    return res.render('addBlog',{
        user : req.user
    })
}
async function postAddBlog(req,res){
    const {title,body} = req.body;
    
    const blog = await addBlog.create({
        title,
        body,
        coverImage : `/uploads/${req.file.filename}`,
        createdBy : req.user._id
    })
    const comments = [];
    return res.render('blogg',{
        user : req.user,
        blog : blog,
        comments
        
    })
    
}
async function getCurrentBlog(req,res) {
    const blog = await addBlog.findById(req.params.id).populate("createdBy");
    const comments = await comment.find({blogId : req.params.id}).populate('createdBy');
    return res.render('blogg',{
        user : req.user,
        blog,
        comments
    })
}
async function postComment(req,res) {
    await comment.create({
        content : req.body.content,
        blogId : req.params.blogId,
        createdBy : req.user._id
    })
    return res.redirect(`/blogg/${req.params.blogId}`)
}


module.exports = {
    getAddBlog, postAddBlog, getCurrentBlog, postComment
}
