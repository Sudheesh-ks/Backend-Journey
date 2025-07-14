const express = require('express');

const app = express();


// Middleware
app.use(express.json())

let books = [
    {
        id:'1',
        title: 'Book 1'
    },
    {
        id:'2',
        title: 'Book 2'
    },
];


// Intro route
app.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to my books store.'})
});

// Get all books
app.get('/books', (req,res) => {
    res.json({success: true, books})
})

// Get a single book
app.get('/books/:id', (req,res) => {
    const bookId = req.params.id;
    const book = books.find(item => item.id === bookId);

    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({message: 'This book is not available'})
    }
});


// Add a new book
app.post('/add', (req,res) => {
    const newBook = {
        id: books.length + 1, //Use (Math.floor(Math.random() * 1000)).toString) for getting a random value.
        title: `Book ${books.length + 1}`
    }

    books.push(newBook);
    res.status(200).json({data: newBook, message: 'Book added successfully'})
});

// Update a book
app.put('/update/:id', (req,res) => {
    const bookId = req.params.id;
    const findCurrentBook = books.find(item => item.id === bookId);

    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title;

        res.status(200).json({message: 'Book updated successfully'});
    }else{
          res.status(404).json({message:'Book not found'})
    }
});

// Delete a book
app.delete('/delete/:id', (req,res) => {
    const bookId = req.params.id;
    const findIndexOfCurrentBook = books.findIndex(item => item.id === bookId);

    if(findIndexOfCurrentBook){
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({message: "Book deleted successfully", data: deletedBook[0]})
    }else{
        res.status(404).json({message: "Book not found"})
    }
})
  
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})