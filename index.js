const express = require("express");
const path = require("path");
const cookie = require("cookie-parser");
const addBlog = require("./models/addBlog");
const app = express();

const port = process.env.PORT || 8000;


//import
const routes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const connectDB = require("./connection/connectDB");
const { userAuthentication } = require("./middlewares/auth");

//path
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("./public")))

app.use(express.json());
app.use(cookie());

//connection
connectDB("process.env.MONGO_URL");

// EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewares
app.use(userAuthentication("token"));


//routes
app.get("/", async (req, res) => {
  const allDbUsers = await addBlog.find({});
  return res.render("home", {
    user: req.user,
    blogs : allDbUsers
  });
});

//routes
app.use('/blogg',blogRoutes)
app.use("/user", routes);

app.listen(port, () => {
  console.log(`Server started at port : 8000`);
});



// 1732 highest altitude