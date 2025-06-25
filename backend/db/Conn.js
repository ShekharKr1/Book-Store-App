  const mongoose = require("mongoose");
  require('dotenv').config();
  const URI= process.env.mongo_uri
  mongoose.connect(URI).then(()=>{
    console.log("connection succesfully.....");
  }).catch((err)=>{
    console.log(err);
    
  });