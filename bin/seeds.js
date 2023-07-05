const mongoose = require('mongoose');
// Datos que quiero introducir
const books = require('../books.json');

// Conectarme a la BBDD

require('../config/db.config');

// Añadir y crear los documentos a partir de un modelo

const Book = require('../models/Book.model');

// Primero me aseguro de que la conexion se haya abierto
mongoose.connection.once('open', () => {
  // Primero borro lo que habia
  mongoose.connection.dropCollection('books')
  // mongoose.connection.dropDatabase()
    .then(() => {
      console.log('DB has been cleared');
      return Book.create(books)
    })
    .then(books => {
      books.forEach(book => {
        console.log(`The book with the name ${book.name} has been created`);
      })
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      mongoose.disconnect();
    })
})
