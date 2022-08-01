const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  stock: Number,
  url: String,
});

module.exports = mongoose.model("Item", ItemSchema);
