const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ASHAVANI:5HAcgdLm4qHJGCKf@demo.xkghock.mongodb.net/collegetest")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema + Model
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
});
const Student = mongoose.model("students", studentSchema);

// GET method
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
