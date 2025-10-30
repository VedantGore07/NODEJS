// HTTP --> get put post delete
// Pgm to get the data from json file

const express = require('express')
const app = express()
const fs = require('fs')

let usrs = fs.readFileSync("MOCK_DATA.json")
var users = JSON.parse(usrs)

app.get('/app1', (req,res) => {
    res.send(users);
});

// to get in html format
app.get('/brow', (req,res) => {
    const html = `<ul>${users.map((users) => 
        `<li>${users.id} ${users.first_name} ${users.email}</li>`).join("")}
        </ul>`
    res.send(html)
})

// to find a particular user
app.get("/app1/users/:id", (req,res) => {
    const id = req.params.id
    const usr = users.find((u) => u.id == id)
    res.send(usr)
})

app.listen(3030, () => {
    console.log("server listening")
});















