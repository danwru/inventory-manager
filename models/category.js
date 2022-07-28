const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: String,
  description: String,
  url: String,
});

module.exports = mongoose.model("Category", CategorySchema);
