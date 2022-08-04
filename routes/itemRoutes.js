const express = require("express");
const router = express.Router();

const item_controller = require("../controllers/itemController");

router.get("/", item_controller.index);

router.get("/items", item_controller.items_all_get);

// GET request for creating new item
router.get("/items/new", item_controller.item_get_new);

// POST request for creating new item
router.post("/items", item_controller.item_post_new);

router.get("/items/:id", item_controller.item_get);

// GET request for editing an item
router.get("/items/:id/edit", item_controller.item_get_edit);

// PUT request to edit an item
router.put("/items/:id", item_controller.item_put_edit);

router.delete("/items/:id", item_controller.item_delete);

module.exports = router;
