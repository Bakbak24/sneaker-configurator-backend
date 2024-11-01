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

router.get("/:id", (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
      },
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

router.put("/:id", (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order updated",
      },
    },
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order deleted",
      },
    },
  });
});

module.exports = router;
