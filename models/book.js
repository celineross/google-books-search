const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  author: { type: Array },
  image: String,
  link: String,
  synopsis: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
