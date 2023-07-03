const router = require('express').Router();
const miscController = require('../controllers/misc.controller');
const booksController = require('../controllers/books.controller');

// misc
router.get('/', miscController.getHome);

// books
router.get('/books', booksController.listBooks);
router.get('/books/create', booksController.createBook);
router.post('/books/create', booksController.doCreateBook);
router.get('/books/:id', booksController.getBookDetail);
router.post('/books/:id/delete', booksController.deleteBook);

module.exports = router;