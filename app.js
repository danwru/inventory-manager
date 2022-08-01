const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Category = require("./models/category");
const Item = require("./models/item");

mongoose.connect("mongodb://localhost:27017/inventory-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/categories", async (req, res) => {
  const categories = await Category.find({});
  res.render("categories/index", { categories });
});

app.get("/categories/new", (req, res) => {
  res.render("categories/new");
});

app.post("/categories", async (req, res) => {
  const category = new Category(req.body.category);
  await category.save();
  res.redirect(`/categories/${category._id}`);
});

app.get("/categories/:id", async (req, res) => {
  const items = await Item.find({});
  const category = await Category.findById(req.params.id);
  res.render("categories/show", { category, items });
});

app.get(`/categories/:id/edit`, async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.render("categories/edit", { category });
});

app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, {
    ...req.body.category,
  });
  res.redirect(`/categories/${category._id}`);
});

app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  res.redirect("/categories");
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
