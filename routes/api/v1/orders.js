const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    data: {
      orders: [],
    },
  });
});

router.post("/", (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        text: "Order created",
      },
    },
  });
});
