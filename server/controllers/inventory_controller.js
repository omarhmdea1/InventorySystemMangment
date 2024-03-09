const InventoryModel = require("../models/inventory_model");
const Utils = require("../lib/utils");
const Respone = require("../lib/respone");

exports.addItem = (req, res) => {
	const item = req.body;

	if (Utils.checkBlank([item.name, item.price, item.quantity])) {
		return Respone.parameterMissing(res);
	}

	if (
		Utils.isNegativeNumber([
			parseFloat(item.price),
			parseFloat(item.quantity),
		])
	) {
		return Respone.invalidArgument(res);
	}

	const addedItem = InventoryModel.addItem(item);
	return Respone.actionComplete(res, addedItem);
};

exports.getItem = (req, res) => {
	const itemId = req.params.id;

	if (!InventoryModel.isItemExist(itemId)) {
		return Respone.itemNotFound(res);
	}

	const item = InventoryModel.getItem(req.params.id);
	return Respone.actionComplete(res, item);
};

exports.getAllItems = (req, res) => {
	const items = InventoryModel.getAllItems();
	return Respone.actionComplete(res, items);
};

exports.updateItem = (req, res) => {
	const itemId = req.params.id;
	const item = req.body;

	if (Utils.checkBlank([item.name, item.price, item.quantity])) {
		return Respone.parameterMissing(res);
	}

	if (
		Utils.isNegativeNumber([
			parseFloat(item.price),
			parseFloat(item.quantity),
		])
	) {
		return Respone.invalidArgument(res);
	}

	if (!InventoryModel.isItemExist(itemId)) {
		return Respone.itemNotFound(res);
	}

	const updatedItem = InventoryModel.updateItem(req.body);
	return Respone.actionComplete(res, updatedItem);
};

exports.deleteItem = (req, res) => {
	const itemId = req.params.id;

	if (!InventoryModel.isItemExist(itemId)) {
		return Respone.itemNotFound(res);
	}
	InventoryModel.deleteItem(req.params.id);
	return Respone.actionComplete(res);
};
