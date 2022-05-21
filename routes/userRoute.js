const express = require("express");
const router = express.Router();

// controllers
const { createUser } = require("../controllers/authController");

router.route("/register").post(createUser);

module.exports = router;
