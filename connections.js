const mongoose = require('mongoose')

async function connectDB(url) 
{
    mongoose.connect(url)
    .then(()=>console.log(`Database connected sucessfully!`))
    .catch((err)=>{
        console.log(`Error occurred : ${err}`);
        
    })
}

module.exports = {
    connectDB
}