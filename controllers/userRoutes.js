const blogModel = require("../models/blogModel");

function getSignIn(req, res) {
  return res.render("signin");
}

function getsignUp(req, res) {
  return res.render("signup");
}
function getprofile(req, res) {
  return res.render("profile");
}

async function postSignUp(req, res) {
  const { fullname, email, password } = req.body;
  await blogModel.create({
    fullname,
    email,
    password,
  });
  return res.render("signin");
}
async function postSignIn(req, res) {
  const { email, password } = req.body;
  try{
    const token = await blogModel.matchedPassword(email, password);

    return res.cookie("token", token).redirect("/");
  }
  catch(error){
    return res.render("signin",{
        msg : "Incorrect id/password"
    })
  }
}


module.exports = {
  getSignIn,
  getsignUp,
  postSignUp,
  postSignIn,
  getprofile
};
