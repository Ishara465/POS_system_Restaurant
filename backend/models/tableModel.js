const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true, unique: true },
  seats: { type: Number, required: true },
  status: { type: String, default: "Available" },
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
});

module.exports = mongoose.model("Table", tableSchema);
