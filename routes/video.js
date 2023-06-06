const express = require("express");
const videocontroller = require("../controllers/videoController");

const router = express.Router();

router
  .route("/")
  .get(videocontroller.getAllVideos)
  .post(videocontroller.addVideo);

module.exports = router;
