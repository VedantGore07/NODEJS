// cross site scripting (XSS) vulnerability example

const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html')
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
    res.send(`Hi ${escape(req.body.message)}`);
});

app.listen(3080, () => {
    console.log('Server listening');
});

