const mongoose = require("mongoose");
const { DB_URL } = require("../config/serverConfig");
mongoose.connect(DB_URL).then(() => {
  console.log("successfully connected to student_db_dev ");
});

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});

const subjectSchema = mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: String,
  grade: Number,
});

const Student = mongoose.model("student", studentSchema);
const Subject = mongoose.model("subject", subjectSchema);

module.exports = {
  Student,
  Subject,
};
