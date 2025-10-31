const express = require('express')
const app = express()
const fs = require('fs')
const { getUser, getUserBrow, getUserByID } = require('./routes.js')

let usrs = fs.readFileSync("MOCK_DATA.json")
var users = JSON.parse(usrs)

app.get("/app1", getUser)

app.get("/brow", getUserBrow)

app.get("/app1/users/:id", getUserByID)

app.listen(3030, () => {
    console.log("Server Listening")
});

