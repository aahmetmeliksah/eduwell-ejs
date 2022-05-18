const express = require("express");
const router = express.Router();

// controllers
const { addCourse, getAllCourses } = require("../controllers/courseController");

router.route("/").post(addCourse); // add course
router.route("/").get(getAllCourses); // get all courses

module.exports = router;
