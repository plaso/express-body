const Book = require('../models/Book.model');

module.exports.listBooks = (req, res, next) => {
  const { author } = req.query;

  const query = {};
  
  if (author) {
    const regex = new RegExp(author, 'i');
    query.author = regex;
  }


  Book.find(query)
    .then(books => {
      res.render('books', { books })
    })

  // res.render('books', , author });
}

module.exports.getBookDetail = (req, res, next) => {
  const { id } = req.params;

  Book.findById(id)
    .then(book => {
      res.render('books-detail', { book })
    })
    .catch(err => next(err))
}

module.exports.createBook = (req, res, next) => {
  res.render('books-create');
}

module.exports.doCreateBook = (req, res, next) => {
  Book.create(req.body)
    .then(createdBook => {
      console.log(createdBook);
      res.redirect('/books');
    })
    .catch(err => next(err))
}

module.exports.deleteBook = (req, res, next) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/books')
    })
    .catch(err => next(err));
}

