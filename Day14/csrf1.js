// CSRF → Cross-Site Request Forgery

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session')
const csrf = require('csurf')
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: "mykey",
    resave:false,
    saveUninitialized:true
}))

const csrfProtection = csrf()
app.use(csrfProtection)

app.get('/', (req,res) => {
    const form = `
    <form method="post" action="/process">
    <input type="hidden" name="_csrf" value="${req.csrfToken()}"/>
    <input type="text" name="name"/>
    <button>submit<button/>
    </form>
    `
    res.send(form)
})

app.post('/process', (req,res) => {
    res.send(`Hello ${req.body.name}, your profile submitted`)
})

app.listen(3080, () => {
    console.log('Server listening');
});


