const express = require("express");
const { PORT } = require("./config/serverConfig");

const app = express();
app.use(express.json());
const studentRoute = require("./routes/Student");
const subjectRoute = require("./routes/Subject");

app.use("/api/student", studentRoute);
app.use("/api/subject", subjectRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
