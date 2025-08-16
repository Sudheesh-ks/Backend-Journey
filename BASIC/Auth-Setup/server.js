const express = require('express');
const connectDB = require('./database/db');

const app = express();


connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server connected to port ${PORT}`)
})