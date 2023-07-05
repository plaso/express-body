// Datos que quiero introducir
const books = require('../books.json');

// Conectarme a la BBDD

require('../config/db.config');

// Añadir y crear los documentos a partir de un modelo

const Book = require('../models/Book.model');

Book.create(books)
  .then(books => {
    books.forEach(book => {
      console.log(`The book with the name ${book.name} has been created`);
    })
  })
  .catch(err => {
    console.error(err);
  })