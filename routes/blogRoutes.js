const express = require('express')
const router = express.Router();
const {getAddBlog, postAddBlog, getCurrentBlog, postComment} = require('../controllers/blogRoutes')

const multer = require('multer')
const path = require('path')

//Storage - multer
const storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,path.resolve(`./public/uploads/`))
  },
  filename : function(req,file,cb){
    const filename = `${Date.now()}-${file.originalname}`
    cb(null,filename)
  }

});

const upload = multer({storage})

router.get('/addblogg',getAddBlog)
router.get('/:id',getCurrentBlog)
router.post('/',upload.single('coverImage'),postAddBlog)

router.post('/comments/:blogId',postComment)


module.exports = router