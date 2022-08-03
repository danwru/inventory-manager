const express = require("express");
const router = express.Router();

// Require controller module
const category_controller = require("../controllers/categoryController");

// Category routes

// GET home page ->  home view
router.get("/", category_controller.index);

// GET request for getting all existing categories -> index view
router.get("/categories", category_controller.category_get);

// GET request for creating a new category -> new view
router.get("/categories/new", category_controller.category_create_get);

// POST request for creating a category
router.post("/categories", category_controller.category_create_post);

// GET request for a specified category -> show view
router.get("/categories/:id", category_controller.category_get_id);

// GET request for editing a specified category -> edit view
router.get("/categories/:id/edit", category_controller.category_get_id_edit);

// PUT request for editing a specified category -> redirects to editied category
router.put("/categories/:id", category_controller.category_put);

// DELETE request for deleting a specified category -> redirects to all categories page
router.delete("/categories/:id", category_controller.category_delete);

module.exports = router;
