const express = require("express");
const router = express.Router();

// controllers
const { addCategory } = require("../controllers/categoryController");

router.route("/").post(addCategory);

module.exports = router;
