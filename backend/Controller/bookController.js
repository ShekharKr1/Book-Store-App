const   Book = require('../model/bookmodel');

const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    console.log("Book from DB:",  book);
    
    res.status(200).send(book);   // ✅ fixed .json type
  
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error"); // ✅ Good to send a response on error
  }
};

module.exports = getBook;
 
