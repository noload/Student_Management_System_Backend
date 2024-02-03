const { Router, json } = require("express");
const { Subject } = require("../db");

const router = Router();

router.post("/addSubject", (req, res) => {
  const subject = new Subject({ ...req.body });
  subject.save();
  if (subject) {
    res.status(200).json({
      message: "Successfully created Subject",
      subject,
    });
  }
});

router.get("/subjects/:studentId", async (req, res) => {
  const stdId = req.params.studentId;

  const subjects = await Subject.find({ studentId: req.params.studentId });

  if (!subjects) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }

  res.status(200).json({
    subjects: true,
    subjects,
  });
});

module.exports = router;
