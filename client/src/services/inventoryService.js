import axios from "axios";

class InventoryService {
	static addItem(item) {
		return axios.post("/api/inventory/items", item);
	}
	static getItem(id) {
		return axios.get(`/api/inventory/items/${id}`);
	}
	static getAllItems(id) {
		return axios.get("/api/inventory/items");
	}
	static updateItem(id, item) {
		return axios.put(`/api/inventory/items/${id}`, item); // or {item}
	}
	static deleteItem(id) {
		return axios.delete(`/api/inventory/items/${id}`);
	}
}

export default InventoryService;
