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

router.route("/").get(indexPage);
router.route("/about").get(aboutPage);
router.route("/our-services").get(ourServicesPage);
router.route("/login").get(loginPage);
router.route("/register").get(registerPage);

module.exports = router;
