const express = require('express')
const logger = require('./logger')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.post('/register', (req,res) => {
    const {username, email} = req.body
    if(!username || !email){
        logger.error("Validation failed: Username and Email are required")
        return res.status(400).json({error:'Username and email are required'})
    }
    if(!email.includes('@')){
        logger.error("Validation warning: Invalid Email")
        return res.status(400).json({error:'Invalid Email'})
    }

    logger.info(`User ${username} registered successfully`)
    res.status(200).json({message:`Welcome ${username}`})
})

app.use((err,req,res,next) => {
    logger.error(`Unhandled error: ${err.message}`)
    res.status(200).json({error:`Internal Server Error`})
})

app.listen(3300, () => {
    logger.info("server running at port 3300")
})