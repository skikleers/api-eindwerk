const express = require("express");
const link = require("./routes/link");
const tag = require("./routes/tag");
const video = require("./routes/video");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.use("/api/link", link);
app.use("/api/tag", tag);
app.use("/api/video", video);

app.listen(4000, () => {
  console.log("connected to port 4000");
});
