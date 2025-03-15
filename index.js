const express = require('express')
const path = require('path')
const app = express();
const cookieParser = require('cookie-parser')

//import
const {connectDB} = require('./connections')
const {restrict_logged_users, checkAuth} = require('./middlewares/auth')
const route = require('./routes/URLroutes');
const staticRouter = require('./routes/staticRoutes')
const userRoutes = require('./routes/USERroutes')

// ejs
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

// Connection with mongoDB
connectDB("mongodb://127.0.0.1:27017/URLshortner")

// Middlewares
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cookieParser())


// routes
app.use('/url',restrict_logged_users,route)
app.use('/user',userRoutes)
app.use('/',checkAuth,staticRouter)


//port
app.listen(8000,()=>console.log("server started at port 80000"));