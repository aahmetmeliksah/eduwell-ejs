const express = require("express");
const router = express.Router();

// controllers
const {
  addCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courseController");

// middlewares
const roleMiddleware = require("../middlewares/roleMiddleware");

router.route("/").post(roleMiddleware(["admin", "teacher"]), addCourse); // add course
router.route("/").get(getAllCourses); // get all courses
router.route("/:slug").get(getCourse); // get a course

module.exports = router;
