const mongoose = require("mongoose");
const User = require('../model/usermodel'); // Use capitalized for model
const bcrypt =require('bcrypt');
const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    const result = await newUser.save();

    console.log(result);
    res.status(201).send({ message: "User created successfully", user: result });
    
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};



const login= async(req,res)=>{
    try{
         const{email,password}= req.body;
         const userdata= await User.findOne({email});
        //  if(userdata.password===password){
        //     res.status(201).send({message:"user login successfully"})
        //  }
        if (!userdata) {
      return res.status(400).send({ message: "Invalid detail" });
    }

    // Now check password
    const isMatch = await bcrypt.compare(password, userdata.password);

    if (!isMatch) {
      return res.status(400).send({ message: "Invalid deatil" });
    }
    res.status(200).send({
      message: "Login successfully",
      userdata: {
        _id: userdata._id,
        name: userdata.name,
        email: userdata.email,
      },
     
    });
    } catch(err){
        console.log("the error is:", err);
        res.status(500).send({ message: "Internal server error" });
        
    }
}
module.exports = { Signup,login };

