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
    material: { type: String, default: null },
  },
  soleColor: {
    type: String,
    material: { type: String, default: null },
  },
  tongueColor: {
    type: String,
    material: { type: String, default: null },
  },
  tipColor: {
    type: String,
    material: { type: String, default: null },
  },
  extraOptions: {
    logo: { type: String, default: null },
    customText: { type: String, default: null },
  },
  snapshot: {
    type: String,
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
