const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, role });
    await User.register(user, password);
    console.log(user);
    let token = jwt.sign(
      { uid: user._id, username: user.username },
      "MySecretSauce"
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
        "MySecretSauce"
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

module.exports = {
  signup,
  login,
};
