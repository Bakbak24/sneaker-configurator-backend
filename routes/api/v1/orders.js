const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/api/v1/orderController");
const passport = require("../../../passport/passport");
const isAdmin = require("../../../middlewares/auth");

router.get("/", orderController.index);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.create);
router.put("/:id", passport.authenticate("jwt", { session: false }), isAdmin, orderController.update);
router.delete("/:id", passport.authenticate("jwt", { session: false }), isAdmin, orderController.remove);

module.exports = router;
