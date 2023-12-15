const {CustomAPIError} = require('../errors/custom-error')



const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:err})   // this will print out all the errors of try catch because we used next(error) which will route that error to this middleware and server errors
}

module.exports = errorHandlerMiddleware



