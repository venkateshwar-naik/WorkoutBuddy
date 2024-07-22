const express = require("express")

const workout = require("../modals/Workout")

const  router = express.Router();

const  authUser= require("../middleware/userMiddleware")


router.use(authUser)

// require controllers////////////
const {getWokoutData ,getWorkout,createWorkout, editWorkout, deleteData}= require("../controllers/workoutController")


/////////////// get entire records/////////////////////////

router.get("/",getWokoutData)

////// get single record//////////////////

router.get("/:id",getWorkout)

// create record////////////////

router.post("/create",createWorkout)

///////////// update record //////////////

router.patch("/:id",editWorkout)



//////delete data////// 

router.delete("/:id",deleteData)





module.exports=router
























