const express = require("express");
const linkcontroller = require("../controllers/linkController");

const router = express.Router();

router.route("/").get(linkcontroller.getAllLinks).post(linkcontroller.addLink);

module.exports = router;
