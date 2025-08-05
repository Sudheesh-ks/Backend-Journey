require('dotenv').config()
const express = require('express');
const { connectDB } = require('./database/db');
const bookRouter = require('./routes/bookRoutes');


const app = express();

// connect to db
connectDB();

// middlewares
app.use(express.json());

const PORT = process.env.PORT || 3000;

// routes
app.use('/books', bookRouter)

app.listen(PORT, () => {
    console.log(`Server conneted to ${PORT}`)
})