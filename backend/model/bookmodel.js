 const mongoose = require("mongoose");
 const bookSchema= new mongoose.Schema({
      title:{
        type:String,
      },
      description:{
        type: String,
      },
      price:{
        type:Number
      },
      category:{
        type:String
      },
      image:{
          type:String
      }
 })
//  const bookmodel= new mongoose.model("bookmodel",bookSchema);
//model creation
const Book = mongoose.model("Book", bookSchema, "books"); // third param is collection name
 module.exports= Book;