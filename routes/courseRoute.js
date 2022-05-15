const express = require("express");
const router = express.Router();

// controllers
const { addCourse } = require("../controllers/courseController");

router.route("/").post(addCourse);

module.exports = router;
