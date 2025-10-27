const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    res.send("Welcome to the Express session")
});

app.get('/home', (req, res) => {
    res.send("Good Evening!");
})

app.get('/1.html', (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'))
});

app.get('/2.html', (req, res) => {
    res.redirect(301, '1.html');
});

app.listen(3000, () =>{
    console.log("server is listening on port 3000");
});
    







