const { Router } = require("express");
const { Grade } = require("../db/schema");
const router = Router();

router.post("/addGrade", (req, res) => {
  const grade = new Grade({ ...req.body });
  grade.save();
  if (!grade) {
    res.status(404).json({
      message: "Something went wrong Not able to add grade",
    });
  }
  res.status(200).json({
    message: "Grade added successfully",
    grade,
  });
});

router.get("/getGrade/:id", async (req, res) => {
  const grade = await Grade.findById(req.params.id);

  if (!grade) {
    res.json({
      message: "Grade Not Found with specific ID",
    });
  }
  res.status(200).json({
    message: "Grade Found",
    grade,
  });
});

module.exports = router;
