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

module.exports = {
  signup,
};
