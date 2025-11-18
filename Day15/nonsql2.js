const express = require('express')
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

//establish the connection
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err))


// create a schema

const userlogin = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
    }
})

// create a model

const User = mongoose.model('userlogin', userlogin)
app.use(express.urlencoded({extended:false}))

// app.post("/login", async(req,res) => {
//     const {username, password} = req.body
//     const user = await user.findOne({username, password}).lean
//     if(user) return res.json(user)
//         res.status(401).send('unautherized')  
// })

app.post('/login', async(req, res) => {
    const username = String(req.body.username??'') 
    const password = String(req.body-password??'')
    const user = await User.findOne({username, password}).lean
    if(user) return res.json(user)
        res.status(401).send('unautherized')
})

app.listen(3090, () => {
    console.log("Server listening")
})

