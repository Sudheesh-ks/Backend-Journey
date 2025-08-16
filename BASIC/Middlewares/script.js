const express = require('express')

const app = express();

const myMiddleware = (req, res, next) => {
    console.log("Middleware is hitting...");

    next();
}

app.use(myMiddleware)

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/home', (req, res) => {
    res.send("Welcome to home")
})

app.listen(3000, () => {
    console.log("Server started....")
})
