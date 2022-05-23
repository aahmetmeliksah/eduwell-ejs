const express = require("express");
const router = express.Router();

// controllers
const {
  indexPage,
  aboutPage,
  ourServicesPage,
  loginPage,
  registerPage,
} = require("../controllers/pageController");

// middlewares
const redirectMiddleware = require("../middlewares/redirectMiddleware");

router.route("/").get(indexPage);
router.route("/about").get(aboutPage);
router.route("/our-services").get(ourServicesPage);
router.route("/login").get(redirectMiddleware, loginPage);
router.route("/register").get(redirectMiddleware, registerPage);

module.exports = router;
