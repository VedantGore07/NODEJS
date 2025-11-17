// cross site scripting (XSS) vulnerability example

const express = require('express');
const bodyParser = require('body-parser');
const sanitize = require('sanitize-html')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <form action="/script" method="post">
            <input type="text" name="message"/>
            <button>POST</button> 
        </form>
    `);
});

app.post('/script', (req, res) => {
    const rawInput = req.body.message;
    const cleanInput = sanitize(rawInput, {
        allowedTags:['b','i'],
        allowedAttributes:{}
    })
    res.send(`
        <h2>Sanitized Output</h2>
        <div>${cleanInput}</div>
    `);
    
});

app.listen(3080, () => {
    console.log('Server listening');
});

