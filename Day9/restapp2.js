// POST --> add new data 
//1. receive data from the user{"id":id, "first_name":"first_name", "email":"email"}
//2. insert the data in to array
//3. push function to add data in to array
//4. reading data from mock_data.json
//5. add in to the file

const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json());
let usrs = fs.readFileSync("MOCK_DATA.json")
var users = JSON.parse(usrs)

app.post('/api/users', (req,res) => {
    // const body = req.body
    const newId = users.length+1
    const {first_name, email} = req.body
    users.push({"id":newId, "first_name":first_name, "email":email})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
        res.send(users)
    })
    res.send("user added")
})


app.listen(3030, () => {
    console.log("server listening")
});