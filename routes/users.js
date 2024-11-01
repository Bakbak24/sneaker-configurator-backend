var express = require("express");
var router = express.Router();
const passport = require("../passport/passport");
const authController = require("../controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.put(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  authController.updatePassword
);

module.exports = router;
