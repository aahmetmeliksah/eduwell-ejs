const express = require("express");
const router = express.Router();

// controllers
const {
  addCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courseController");

router.route("/").post(addCourse); // add course
router.route("/").get(getAllCourses); // get all courses
router.route("/:slug").get(getCourse); // get a course

module.exports = router;
