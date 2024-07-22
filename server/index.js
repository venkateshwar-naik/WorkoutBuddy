require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5800;

// db connection
require("./db/Connection");

// require routes
const userRoutes = require("./routes/userRoutes");
const workoutRoute = require("./routes/WorkoutRoutes");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Helloo");
  
});

// routes
app.use("/api/workout", workoutRoute);
app.use("/api/user", userRoutes);


app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
