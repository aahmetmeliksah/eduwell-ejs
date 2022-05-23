const express = require("express");
const router = express.Router();

// controllers
const {
  createUser,
  loginUser,
  logoutUser,
  myLearningPage,
} = require("../controllers/authController");

// middlewares
const authMiddleware = require("../middlewares/authMiddleWare");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/my-learning").get(authMiddleware, myLearningPage);

module.exports = router;
