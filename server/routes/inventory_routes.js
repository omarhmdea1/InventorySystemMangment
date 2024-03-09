const express = require("express");

const InventoryController = require("../controllers/inventory_controller");

const router = express.Router();

router.post("/items", InventoryController.addItem);

router.get("/items", InventoryController.getAllItems);

router.get("/items/:id", InventoryController.getItem);

router.put("/items/:id", InventoryController.updateItem);

router.delete("/items/:id", InventoryController.deleteItem);

module.exports = router;
