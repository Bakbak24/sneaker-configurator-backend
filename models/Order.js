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
    color: {type: String, default: "white"},
    material: { type: String, default: null },
  },
  soleColor: {
    color: {type: String, default: "white"},
    material: { type: String, default: null },
  },
  tongueColor: {
    color: {type: String, default: "white"},
    material: { type: String, default: null },
  },
  tipColor: {
    color: {type: String, default: "white"},
    material: { type: String, default: null },
  },
  extraOptions: {
    logo: { type: String, default: null },
    customText: { type: String, default: null },
  },
  status: {
    type: String,
    enum: ["in-production", "shipped", "canceled"],
    default: "in-production",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
