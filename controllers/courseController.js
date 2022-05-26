const Course = require("../models/Course");
const Category = require("../models/Category");

// add a course
const addCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      user: req.session.userID,
    });

    res.status(201).redirect("/courses");
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
    const category = await Category.findOne({ slug: req.query.categories });

    let filter = {};

    if (category) {
      filter = { category: category._id };
    }

    const courses = await Course.find(filter).sort("-createdAt");
    const categories = await Category.find();

    res.status(200).render("courses", {
      courses,
      categories,
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
