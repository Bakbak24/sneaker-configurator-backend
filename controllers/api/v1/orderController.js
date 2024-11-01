const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  shoeSize: {
    type: Number,
    required: true,
  },
  laceColor: {
    type: String,
    required: true,
  },
  soleColor: {
    type: String,
    required: true,
  },
  extraOptions: {
    charms: { type: String, default: null },
    patterns: { type: String, default: null },
    material: { type: String, default: null },
    customText: { type: String, default: null },
  },
  status: {
    type: String,
    enum: ["in productie", "verzonden", "afgehandeld", "geannuleerd"],
    default: "in productie",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model("Order", orderSchema);

const index = (req, res) => {
  res.json({
    status: "success",
    data: {
      orders: [],
    },
  });
};

const getOrderById = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
      },
    },
  });
};

const create = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        text: "Order created",
      },
    },
  });
};

const update = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order updated",
      },
    },
  });
};

const remove = (req, res) => {
  res.json({
    status: "success",
    data: {
      order: {
        id: req.params.id,
        text: "Order deleted",
      },
    },
  });
};

module.exports = {
  index,
  getOrderById,
  create,
  update,
  remove,
};
