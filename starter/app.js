
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()


// middleware
app.use(express.static("./public"))
app.use(express.json())   // if we don't use this them we dont have data in req.body


// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)

const port = 3000


const start = async()=>{
    try{await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listenin on ${port}...`))
    } catch(err){
        console.log(err)
    }
}

start()
