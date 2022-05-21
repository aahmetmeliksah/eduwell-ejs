const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "user created",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { createUser };
