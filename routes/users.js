var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", function (req, res, next) {
  res.send("test");
});

module.exports = router;
