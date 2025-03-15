const USER = require('../models/user')
const {v4:uuidv4} = require('uuid')
const {setUID} = require('../services/auth');
const { set } = require('mongoose');
async function  handleSignUP(req,res) {
    const {name, email, password} = req.body;

    await USER.create({
        name,
        email,
        password
    })
    return res.render('home',{
        msg : "new entry created"
    })
}

async function handleLogin(req,res) {
    const {email, password} = req.body;
    const user = await USER.findOne({email,password})

    if(!user) return res.render('login',{
        msg : "incorrect email/password"
    })
    const uid = uuidv4();
    setUID(uid,user)
    res.cookie("uid",uid)
    return res.redirect('/')
}

module.exports = {
    handleSignUP, handleLogin
}