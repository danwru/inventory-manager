const Item = require("../models/item");
const Category = require("../models/category");

exports.index = (req, res) => {
  res.render("/items/home");
};

exports.items_all_get = async (req, res) => {
  const items = await Item.find({});
  res.render("items/index", { items });
};

// GET request for creating new item
exports.item_get_new = async (req, res) => {
  res.render("items/new");
};

// POST request for creating new item
exports.item_post_new = async (req, res) => {
  const item = new Item(req.body.item);
  await item.save();
  res.redirect(`/items/${item._id}`);
};

// GET request for specified item
exports.item_get = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render("items/show", { item });
};

// GET request for editing an item
exports.item_get_edit = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render("items/edit", { item });
};

// PUT request for editing an item
exports.item_put_edit = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByIdAndUpdate(id, { ...req.body.item });
  res.redirect(`/items/${item._id}`);
};

// DELETE request for a specified item
exports.item_delete = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect("/categories");
};
