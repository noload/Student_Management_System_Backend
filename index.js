const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();
app.use(express.json());

const studentRoute = require("./routes/Student");
const subjectRoute = require("./routes/Subject");
const gradeRoute = require("./routes/Grade");
const reportRoute = require("./routes/ReportCard");

app.get("/", (req, res) => {
  res.send("this is first docker project");
});
app.use("/api/student", studentRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/grade", gradeRoute);
app.use("/api/report", reportRoute);

app.listen(3000, () => {
  console.log(`server listening on port ${PORT}`);
});
