const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();
app.use(express.json());
const studentRoute = require("./routes/Student");
const subjectRoute = require("./routes/Subject");
const gradeRoute = require("./routes/Grade");

app.use("/api/student", studentRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/grade", gradeRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
