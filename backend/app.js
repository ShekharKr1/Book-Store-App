const express = require("express");
const app = express();
require('dotenv').config();
require('./db/Conn')
const userModel= require('./model/usermodel')
const bookroute= require('./routes/bookroute');
const userroute= require('./routes/userroute');
const cors= require("cors");
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- Add this


//defining routes
//book or user k place kuch bhi likh skte hai
app.use('/book', bookroute);
app.use('/user', userroute)


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
