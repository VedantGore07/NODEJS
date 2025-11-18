// noSql injection - nosql database
// $ne, $gt, $or
// 

// establish connection with mongoose
// create schema
// create model
// perform CRUD operations

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

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    USN:{
        type:String,
        required:true,
        unique:true
    }
})

// create a model

const Student = mongoose.model('student', userSchema)
app.use(express.urlencoded({extended:false}))

app.post("/api/users", async(req,res) => {
    const body = req.body
    const result = await Student.create({
        Name:body.Name,
        USN:body.USN
    })
    console.log("result", result)
    return res.status(201).json({msg:"success"})
})

app.get("/students", async(req,res) => {
    const allstudents = await Student.find({})
    const html = `<ul>${allstudents.map((student) => `<li>${student.Name}-${student.USN}</li>`).join("")}</ul>`
    res.send(html)
})

app.patch("/students/:id", async(req,res) => {
    const updateStudent = await Student.findByIdAndUpdate(req.params.id, {USN:"2CS2"},{new:true})
    res.json(updateStudent)
})

app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' });
});

app.listen(3090, () => {
    console.log("Server Running")
})

