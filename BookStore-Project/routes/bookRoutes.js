const express = require('express');
const { getAllBooks, getAllBooksById, addBooks, updateBook, deleteBook } = require('../controllers/bookController');

// create express bookRouter
const bookRouter = express.Router();

// all routes for the books
bookRouter.get('/get', getAllBooks);
bookRouter.get('/get/:id', getAllBooksById);
bookRouter.post('/add', addBooks);
bookRouter.put('/update/:id', updateBook);
bookRouter.delete('/delete/:id', deleteBook);


module.exports = bookRouter;