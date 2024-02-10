const { Router } = require("express");
const { Student, ReportCard } = require("../db/schema");
const mongoose = require("mongoose");
const router = Router();

router.post("/std_report", async (req, res) => {
  try {
    const { student, subjects } = req.body;

    const studentDetail = await Student.findById(student);
    if (!studentDetail) {
      res.status(404).json({
        message: "Student Not found",
      });
    }
    const student_enrolled_subject = studentDetail.enrolledSubjects;

    subjects.forEach(async (subjectObj) => {
      if (student_enrolled_subject.includes(subjectObj.subject)) {
        let student_repord_Card = await ReportCard.findOne({
          student: studentDetail._id,
        });
        console.log("find", student_repord_Card);

        if (!student_repord_Card) {
          let progressReport = new ReportCard({
            student: studentDetail._id,
            subjects: [],
          });
          console.log(progressReport);

          progressReport.subjects.push({
            subject: subjectObj.subject,
            grade: subjectObj.grade,
          });
          progressReport.save();
        } else {
          console.log("else block", student_repord_Card);
          student_repord_Card.subjects.push({
            subject: subjectObj.subject,
            grade: subjectObj.grade,
          });
          student_repord_Card.save();
        }
      } else {
        console.log("not enrolled subject");
      }
    });
    res.send("on report card page");
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
