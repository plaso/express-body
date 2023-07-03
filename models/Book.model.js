const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Title of the book is required'],
    },
    author: {
      type: String,
      required: [true, 'Author of the book is required'],
    },
    description: {
      type: String,
      required: [true, 'Description of the book is required'],
    },
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
