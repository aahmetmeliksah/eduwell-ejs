const express = require("express");
const router = express.Router();

// controllers
const {
  indexPage,
  aboutPage,
  ourServicesPage,
} = require("../controllers/pageController");

router.route("/").get(indexPage);
router.route("/about").get(aboutPage);
router.route("/our-services").get(ourServicesPage);

module.exports = router;
