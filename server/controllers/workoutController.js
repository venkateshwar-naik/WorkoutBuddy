const Workout = require("../modals/Workout");
// get all data///

const getWokoutData = async (req, res) => {
  try {
    const workoutData = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err)
  }
};

////////////// get single data///////////////

const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findById({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err)
  }
};

// create data//////////

const createWorkout = async (req, res) => {

  try {
    const newWorkout = new Workout(req.body);
    const workout = await newWorkout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err)
  }
};

// edit the record///

const editWorkout = async (req, res) => {
  
  try {
    const id = req.params.id;
    const workoutDataa = await Workout.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(workoutDataa);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err)
  }
};

const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteDataa = await Workout.findByIdAndDelete({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(deleteDataa);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // console.log(err)
  }
};

module.exports = {
  getWokoutData,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteData,
};
