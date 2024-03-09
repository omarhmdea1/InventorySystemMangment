// Need to rewrite this class in another way
class Inventory {
	constructor(name, quantity, price) {
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}

	static itemsCounter = 0;

	static addItem(item) {
		if (!Inventory.inventory) {
			Inventory.inventory = {};
		}
		item.id = ++this.itemsCounter;
		Inventory.inventory[item.id] = item;
		return item;
	}

	static getItem(id) {
		if (isItemExist(id)) {
			return Inventory.inventory[id];
		}
	}

	static getAllItems() {
		if (!Inventory.inventory) {
			return [];
		}
		return Object.values(Inventory.inventory);
	}

	static updateItem(item) {
		if (Inventory.inventory[item.id]) {
			Inventory.inventory[item.id] = item;
			return item;
		}
	}

	static deleteItem(id) {
		if (Inventory.inventory && Inventory.inventory[id]) {
			delete Inventory.inventory[id];
		}
	}

	static isItemExist(id) {
		if (Inventory.inventory[id]) {
			return true;
		}
		return false;
	}
}

module.exports = Inventory;
