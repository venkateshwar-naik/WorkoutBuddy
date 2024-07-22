const mongoose= require("mongoose")

const workoutSchema= mongoose.Schema({
    title:{
        type:String,
    required:true
},
reps:{
    type:Number,
    required:true,

},
load:{
    type:String,
    required:true
}
    
})


const workout = new  mongoose.model("workout",workoutSchema)
module.exports= workout

























