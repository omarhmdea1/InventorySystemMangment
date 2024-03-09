import { useEffect, useState } from "react";
import InventoryService from "../services/inventoryService";
import AddItemForm from "./AddItemForm";
import InventoryList from "./InventoryList";
import UpdateItemForm from "./UpdateItemForm";

const MainPage = () => {
	const [items, setItems] = useState([]);
	const [toggleForm, setToggleForm] = useState(true);
	const [itemToUpdate, setItemToUpdate] = useState(null);

	useEffect(() => {
		InventoryService.getAllItems().then((res) => setItems(res.data.data));
	}, []);

	async function addItemToList(newItem) {
		try {
			await InventoryService.addItem(newItem);
			setItems([...items, newItem]);
		} catch (error) {
			console.error(error.message);
		}
	}

	async function deleteItem(itemID) {
		try {
			await InventoryService.deleteItem(itemID);
			setItems(items.filter((i) => i.id != itemID));
		} catch (error) {
			console.error(error.message);
		}
	}

	function getItemtoUpdate(item) {
		setItemToUpdate(item);
		setToggleForm(false);
	}

	async function updateItem(updatedItem) {
		try {
			await InventoryService.updateItem(updatedItem.id, updatedItem);
			const res = items.map((item) =>
				item.id === updatedItem.id ? { ...item, ...updatedItem } : item
			);
			setItems(res);
			setToggleForm(true);
		} catch (error) {
			console.error(error.message);
		}
	}

	return (
		<div>
			{toggleForm ? (
				<AddItemForm addItem={addItemToList} />
			) : (
				<UpdateItemForm item={itemToUpdate} updateItem={updateItem} />
			)}
			<InventoryList
				items={items}
				deleteItem={deleteItem}
				getItemtoUpdate={getItemtoUpdate}
			/>
		</div>
	);
};

export default MainPage;
