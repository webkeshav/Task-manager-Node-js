
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


// middleware
app.use(express.json())   // if we don't use this them we dont have data in req.body

app.get('/hello',(rq,res)=>{
    res.send("Task Manager app")
})

app.use('/api/v1/tasks',tasks)

const port = 3000

const start = async()=>{
    try{await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listenin on ${port}...`))
    } catch(err){
        console.log(err)
    }
}

start()
