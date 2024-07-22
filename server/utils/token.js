const jwt= require("jsonwebtoken")
require("dotenv").config()


const createToken=   (_id)=>{
  return  jwt.sign({_id},"mysecret",process.env.JWT_SECRET,{expiresIn:"3d"})
}


module.exports=createToken



































