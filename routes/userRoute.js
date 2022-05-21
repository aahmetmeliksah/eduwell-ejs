const express = require("express");
const router = express.Router();

// controllers
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

module.exports = router;
