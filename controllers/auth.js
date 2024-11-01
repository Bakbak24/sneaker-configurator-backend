const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");

const signup = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, role });
    await User.register(user, password);
    console.log(user);
    let token = jwt.sign(
      { uid: user._id, username: user.username },
      process.env.secretsauce || config.get("jwt.secret")
    );
    res.json({
      status: "success",
      data: {
        token: token,
      },
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

      let token = jwt.sign(
        { uid: user._id, username: user.username },
        process.env.secretsauce || config.get("jwt.secret")
      );

      res.json({
        status: "success",
        data: {
          token: token,
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

const updatePassword = async (req, res, next) => {
  try {
    const { userId, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.json({
        status: "fail",
        message: "User not found",
      });
    }

    await user.setPassword(newPassword);
    await user.save();

    res.json({
      status: "success",
      message: "Password updated successfully",
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
  updatePassword,
};
