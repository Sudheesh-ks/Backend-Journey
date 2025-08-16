
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("hello")
})

// Simple example
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`UserId : ${userId}`)
})



// Advanced example for routing with params
app.get('/products/:id', (req,res) => {
    const productId = parseInt(req.params.id)
    const products = [
        {
            id:1,
            name:'product1',
            price:200
        },
        {
            id:2,
            name:'product2',
            price:300
        },
        {
            id:3,
            name:'product3',
            price:400
        },
    ]

    const getSingleProduct = products.find(product => product.id === productId);
    if(getSingleProduct){
        res.send(getSingleProduct)
    }else{
        res.status(404).send("No product found")
    }
})


app.listen(3000,() => {
    console.log("Server started....");
})