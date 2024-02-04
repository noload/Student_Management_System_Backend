const mongoose = require("mongoose");
const { DB_URL } = require("../config/serverConfig");
mongoose.connect(DB_URL).then(() => {
  console.log("successfully connected to student_db_dev ");
});

// Student Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  enrolledSubjects: [{ type: mongoose.Schema.Types.ObjectId }],
});

// Subject Schema
const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Grade Schema
const gradeSchema = new mongoose.Schema({
  grade: { type: String, required: true, unique: true }, // A+, A, B+, B, etc.
});

// Progress Report Schema
const progressReportSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId },
  subjects: [
    {
      subject: { type: mongoose.Schema.Types.ObjectId },
      grade: { type: mongoose.Schema.Types.ObjectId },
    },
  ],
});

const Grade = mongoose.model("grade", gradeSchema);

const Student = mongoose.model("student", studentSchema);

const Subject = mongoose.model("subject", subjectSchema);

const ReportCard = mongoose.model("report_card", progressReportSchema);

module.exports = {
  Student,
  Subject,
  Grade,
};
