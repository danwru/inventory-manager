const Category = require("../models/category");
const Item = require("../models/item");

// GET home page ->  home view
exports.index = (req, res) => {
  res.render("home");
};

// GET request for getting all existing categories -> index view
exports.category_get = async (req, res) => {
  const categories = await Category.find({});
  res.render("categories/index", { categories });
};

// GET request for creating a new category -> new view
exports.category_create_get = async (req, res) => {
  res.render("categories/new");
};

// POST request for creating a category
exports.category_create_post = async (req, res) => {
  const category = new Category(req.body.category);
  await category.save();
  res.redirect(`/categories/${category._id}`);
};

// GET request for a specified category -> show view
exports.category_get_id = async (req, res) => {
  const items = await Item.find({});
  const category = await Category.findById(req.params.id);
  res.render("categories/show", { category, items });
};

// GET request for editing a specified category -> edit view
exports.category_get_id_edit = async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.render("categories/edit", { category });
};

// PUT request for editing a specified category -> redirects to editied category
exports.category_put = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, {
    ...req.body.category,
  });
  res.redirect(`/categories/${category._id}`);
};

// DELETE request for deleting a specified category -> redirects to all categories page
exports.category_delete = async (req, res) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  res.redirect("/categories");
};
