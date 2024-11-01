const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  customerName: {
    type: String,
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

module.exports = Order;
