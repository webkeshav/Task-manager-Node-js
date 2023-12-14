const mongoose = require('mongoose')




const connetDB = (url)=>{
    return   mongoose.connect(url).then(()=>console.log("connected to db"))
    
}

module.exports = connetDB