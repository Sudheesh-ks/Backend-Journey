const express = require('express');

const app = express();

// Simple query params example
app.get('/user', (req,res) => {
    const name = req.query.name;
    const place = req.query.place;
    res.send(`I am ${name} from ${place}`)
});


// A complex problem
app.get('/problem',(req,res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const sum = num1 + num2;
    const double = sum * 2;
    res.send(`Sum : ${sum} double : ${double}`);
})


app.listen(3000, () => {
    console.log("server started.....")
})