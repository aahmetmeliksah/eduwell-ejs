const Course = require("../models/Course");

// add a course
const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      status: "course created",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

// get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render("courses", {
      courses,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// get a course
const getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });

    res.status(200).render("course", {
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { addCourse, getAllCourses, getCourse };
