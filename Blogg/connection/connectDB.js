const mongoose = require("mongoose");

async function connectDB(url) {
   return mongoose
    .connect(url)
    .then(() => {
      console.log("Databse Connected Sucessfully :)");
    })
    .catch((err) => {
      console.log(`an error occured : ${err}`);
    });
}

module.exports = connectDB;
