const Order = require("../../../models/Order");

const index = async (req, res) => {
  try {
    const sortBy = req.query.sortby === "date" ? { createdAt: -1 } : {};
    const orders = await Order.find().sort(sortBy);
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
      tongueColor: req.body.tongueColor,
      tipColor: req.body.tipColor,
      extraOptions: req.body.extraOptions,
      snapshot: req.body.snapshot,
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
      { new: true, runValidators: true }
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

const remove = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
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
        order: deletedOrder,
      },
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  index,
  getOrderById,
  create,
  update,
  remove,
};
