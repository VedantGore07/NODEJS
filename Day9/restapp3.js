// Update name of a particular user whose id matches
//1. enter the id in url
//2. enter new name
//3. update that user array with new name


const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
let usrs = fs.readFileSync("MOCK_DATA.json")
var users = JSON.parse(usrs)

app.put("/app1/users/:id", (req,res) => {
    const id = req.params.id
    const {first_name} = req.body 
    const usr = users.find((u) => u.id == id)
    usr.first_name = first_name
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
        res.send(`user with id ${id} updated`)
    })
});

app.listen(3030, () => {
    console.log("server listening")
});







