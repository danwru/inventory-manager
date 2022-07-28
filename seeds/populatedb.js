const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Category = require("../models/category");
const Item = require("../models/item");
const { brands, instruments } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/inventory-manager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  // seed categories
  await Category.deleteMany({});
  instruments.forEach((instrument) => {
    const category = new Category({
      name: instrument,
      description: `${instrument} category`,
      url: this._id,
    });
    category.save();
  });

  // seed items
  await Item.deleteMany({});
  for (let i = 0; i < 30; i++) {
    const curr = sample(instruments);
    const item = new Item({
      name: `${sample(brands)} ${curr}`,
      description: "Description here",
      category: curr,
      price: Math.floor(Math.random() * 10000),
      stock: Math.floor(Math.random() * 100),
      url: this._id,
    });
    await item.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
