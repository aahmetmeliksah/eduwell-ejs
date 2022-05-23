const bcrypt = require("bcrypt");

const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect("/login");
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          /* there's no such thing as userID, but there's an object that is 'session'. So, I added userID variable to that object and assigned user's _id to it */
          req.session.userID = user._id;
          res.status(200).redirect("/users/my-learning");
        } else {
          res
            .status(400)
            .send(
              "<h1 style='font-family: sans-serif'>Check your email and password</h1>"
            );
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "login failed",
      error,
    });
  }
};

const logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

const myLearningPage = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userID });

    res.status(200).render("my-learning", {
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { createUser, loginUser, logoutUser, myLearningPage };
