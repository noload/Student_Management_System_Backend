const { Router, json } = require("express");
const { Subject } = require("../db/schema");
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

router.get("/subjects", async (req, res) => {
  const subjects = await Subject.find({});

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

router.get("/SubById/:id", async (req, res) => {
  const subjects = await Subject.findById(req.params.id);

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
