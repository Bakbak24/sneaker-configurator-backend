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

const index = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.json({
        status: "fail",
        data: {
          message: "Order not found",
        },
      });
    }
    res.json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const newOrder = new Order({
      customerName: req.body.customerName,
      customerEmail: req.body.customerEmail,
      shoeSize: req.body.shoeSize,
      laceColor: req.body.laceColor,
      soleColor: req.body.soleColor,
      extraOptions: req.body.extraOptions,
      status: req.body.status || "in productie",
    });

    const savedOrder = await newOrder.save();
    res.json({
      status: "success",
      data: {
        order: savedOrder,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedOrder) {
      return res.json({
        status: "fail",
        data: {
          message: "Order not found",
        },
      });
    }
    res.json({
      status: "success",
      data: {
        order: updatedOrder,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
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
