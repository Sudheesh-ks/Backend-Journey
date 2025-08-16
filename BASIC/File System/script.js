const express = require('express');
const fs = require('fs')

const app = express();

// Write File
// fs.writeFile('welcome.txt','welcome to this file',(err) => {
//     if(err){
//         console.log("Something went wrong...")
//     }else{
//         console.log("File created successfully....")
//     }
// });


// Read File
// fs.readFile('welcome.txt','utf8',(err,data) => {
//     if(err){
//         console.log("Something went wrong...")
//     }else{
//         console.log(data);
//     }
// })


// // Append File
// fs.appendFile('welcome.txt',', How are you?',(err) => {
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log("File appended successfully")
//     }
// })


// Make Directory
// fs.mkdir('hello',(err) => {
//     if(err){
//         console.log("Something went wrong")
//     }else{
//         console.log("Directory created successfully...")
//     }
// })

app.listen(3000, () => {
    console.log("server started....") 
})