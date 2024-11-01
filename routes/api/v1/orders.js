const express = require("express");
const router = express.Router();
const orderController = require("../../../controllers/api/v1/orderController");

router.get("/", orderController.index);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.create);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.remove);

module.exports = router;
