/* 1. install mysql2
2. established connection with db using (create connection and connect)
3. conn.query()
4. transaction --- beginTransaction
5. commit()  */

const express = require('express')
const app = express();
app.use(express.json());
const mysql = require('mysql2')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
})

conn.connect((err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Database connected")
    }
    
})

app.get("/dbconn/students", (req, res) => {
    conn.query("select * from students", (err,rows) => {
        if(err)console.log(err)
            res.send(rows)
    })
});

app.get("/dbconn/students/:id", (req,res) => {
    const id = req.params.id;
    conn.query("select * from students where id=?", [id], (err,rows) => {
        if(err)console.log(err)
            res.send(rows)
    })
})

app.post("/dbconn/students", (req,res) => {
    const body = req.body
    conn.beginTransaction((err) => {
        if(err) console.log("error in querying")
    })
conn.query("insert into students values(?,?,?)", Object.values(body),(err) => {
    if(err) console.log(err)
})

conn.commit((err) => {
    if(err) console.log(err)
        res.send("Student data inserted")
})
console.log(body)
})


app.delete("/dbconn/students/:id", (req,res) => {
    const id = req.params.id;
    conn.query("delete from students where id=?", [id], (err,rows) => {
        if(err)console.log(err)
            res.send("user deleted")
    })
})


app.put("/dbconn/students", (req,res) => {
    const body = req.body
    conn.query("update students set branch=? where id=?", Object.values(body), (err) => {
        if(err)console.log(err)
            res.send("student data updated")
    })
    conn.commit((err) => {
        if(err)console.log(err)
            res.send("user updated")
    })
})


app.patch("/dbconn/students/:id", (req,res) => {
    const id = req.params.id
    const body = req.body
    conn.query()


})

app.listen(3300, () => {
    console.log("server started");
})

