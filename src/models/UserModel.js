const mongoose = require("mongoose"); //interacting with database


const userSchema=new.mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:Number,



},{timestamps:true})








module.exports = mongoose.model("User", userSchema); //users in database