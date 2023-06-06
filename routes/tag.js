const express = require("express");
const tagcontroller = require("../controllers/tagController");

const router = express.Router();

router.route("/").get(tagcontroller.getAllTags).post(tagcontroller.addTag);

module.exports = router;
