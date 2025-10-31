const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

let usrs = fs.readFileSync('MOCK_DATA.json');
var users = JSON.parse(usrs);

app.use((req, res, next) => {
    req.name = 'ABC';
    console.log('Middleware1');
    next();
})

app.use( (req, res, next) => {
    console.log('Middleware2', req.name);
    console.log('Time:' + Date.now());
    next();
})


app.use((req, res, next) => {
    fs.appendFile('log.txt',
        `${Date.now()}, ${req.name}, ${req.method}, ${req.path}\n`,
        (err, data) => { next() }
    )
})
app.get('/app/ved', (req, res) => {
    res.send('This is the Ved route after middleware!');
});


// app.get('/', (req, res) => {
//   res.send('Welcome to the homepage!');
// });


// app.post('/api/users', (req, res) => {
//     const newId = users.length + 1;
//     const {first_name, email} = req.body;
//     const body = req.body;

//     users.push({"id": newId, "first_name": first_name, "email": email});

//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         res.send(users);
//     })
// });

app.listen(3030, () => {
    console.log('Serving is running...');
});