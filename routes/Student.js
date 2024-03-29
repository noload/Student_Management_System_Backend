const { Router, json } = require("express");
const { Student } = require("../db/schema");
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const newStudent = await Student.create({ ...req.body });

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Student Not created ",
      err: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      success: false,
      message: "Please enter email and password",
    });
  }
  try {
    const student = await Student.findOne({ ...req.body });
    console.log("student details" + student);

    if (!student) {
      res.status(500).json({
        message: "something went wrong",
      });
    }
    res.status(200).json({
      studentId: student._id,
      success: "true",
      message: "Student logged sucessfully",
    });
  } catch (error) {}
});
module.exports = router;
