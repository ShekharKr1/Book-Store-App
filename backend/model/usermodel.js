  const mongoose = require("mongoose");
  const bcrypt= require("bcrypt")
  const userSchema= new mongoose.Schema({
     name:{
         type:String,
         required: true
     },
     email:{
        type: String,
        required: true,
        unique:true 
     },
     password:{
        type:String,
        required:true,
        unique: true
     }
  });
  //Bcrypt password
   userSchema.pre("save", async function(next){
      if(this.isModified("password")){
          console.log(`The current  password is ${this.password}`);
         this.password= await bcrypt.hash(this.password,12);
         console.log(`The bcrypt password is ${this.password}`);
      }
      next();
   })
 
     
  //model creation
  const User= new mongoose.model("User", userSchema)
  module.exports= User;
