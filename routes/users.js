var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", authController.signup);

module.exports = router;
