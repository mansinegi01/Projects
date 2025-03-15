const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const {tokenForUser} = require("../services/auth")

const blogSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    profileImage: {
      type: String,
      default: "../public/images/defaultImage.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  const user = this;

  salt = randomBytes(10).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

blogSchema.static("matchedPassword", async function (email,password){
  const user = await blogModel.findOne({email})
  if(!user) return
  const salt = user.salt;
  const hashedPassword = user.password;

  const hashUsersignInPassword = createHmac("sha256", salt)
  .update(password)
  .digest("hex");

  if(hashedPassword !== hashUsersignInPassword) throw new err("user not found")
  
  const token = tokenForUser(user)
  return token;

  
    
})

const blogModel = mongoose.model("blogModel", blogSchema);

module.exports = blogModel;
