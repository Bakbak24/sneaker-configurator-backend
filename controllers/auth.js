const User = require("../models/User");

const signup = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, role });
    await User.register(user, password);
    console.log(user);
    res.json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    User.authenticate()(username, password, (err, user, options) => {
      if (err) {
        return res.json({
          status: "error",
          message: err.message,
        });
      }
      if (!user) {
        return res.json({
          status: "fail",
          message: options.message || "Invalid credentials",
        });
      }
      res.json({
        status: "success",
        data: {
          username: user.username,
        },
      });
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  signup,
  login,
};
