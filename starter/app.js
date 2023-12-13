const express = require('express')
const app = express()
const tasks = require('./routes/tasks')


// middleware
app.use(express.json())   // if we don't use this them we dont have data in req.body

app.get('/hello',(rq,res)=>{
    res.send("Task Manager app")
})

app.use('/api/v1/tasks',tasks)

const port = 3000

app.listen(port,console.log(`server is listenin on ${port}...`))