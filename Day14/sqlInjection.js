const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
})

app.post('/login', async(req, res) => {
    const {id, name, branch} = req.body
    try{
        // const[rows] = await pool.execute(`select * from students where id="${id}" and name="${name}" and branch="${branch}"`)
        const [rows] = await pool.execute("SELECT * FROM students WHERE id = ? AND name = ? AND branch = ?",[id, name, branch]);
        if(rows.length>0){
            res.send("sql login successful")
        }
        else{
            res.send("sql login failed")
        }
    }catch(err){
        res.send(500)
    }
})

app.listen(3080, () => {
    console.log('Server listening');
});
