import React from "react";
import { useState } from "react";

const UpdateItemForm = ({ item, updateItem }) => {
	const [itemName, setItemName] = useState(item.name);
	const [itemPrice, setItemPrice] = useState(item.price);
	const [itemQuantity, setItemQuantity] = useState(item.quantity);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (validateInput()) {
			updateItem({
				id: item.id,
				name: itemName,
				price: itemPrice,
				quantity: itemQuantity,
			});
		}
	};

	function validateInput() {
		if (!isValidName(itemName) || itemPrice < 0 || itemQuantity < 0) {
			alert("Please enter valid item name, price, and quantity.");
			return false;
		}
		return true;
	}

	function isValidName(name) {
		const regex = /^[A-Za-z]+$/;
		return regex.test(name);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Update Item</label>
			<br />
			<input
				type="text"
				onChange={(event) => setItemName(event.target.value)}
				defaultValue={item.name}
				required
			/>
			<br />
			<input
				type="number"
				onChange={(event) => setItemPrice(event.target.value)}
				defaultValue={item.price}
				required
			/>
			<br />
			<input
				type="number"
				onChange={(event) => setItemQuantity(event.target.value)}
				defaultValue={item.quantity}
				required
			/>
			<br />
			<input type="submit" value="Save" />
		</form>
	);
};

export default UpdateItemForm;
