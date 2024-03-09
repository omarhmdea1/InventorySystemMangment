import React from "react";
import { useState, useRef } from "react";

const AddItemForm = ({ addItem }) => {
	const [itemName, setItemName] = useState("");
	const itemNameRef = useRef(null);
	const [itemPrice, setItemPrice] = useState(0);
	const itemPriceRef = useRef(null);
	const [itemQuantity, setItemQuantity] = useState(0);
	const itemQuantityRef = useRef(null);

	function handleSubmit(event) {
		event.preventDefault();
		if (validateInput()) {
			addItem({
				name: itemName,
				price: itemPrice,
				quantity: itemQuantity,
			});
			itemNameRef.current.value = "";
			itemPriceRef.current.value = "";
			itemQuantityRef.current.value = "";
		}
	}

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
			<label>Add new Item</label>
			<br />
			<input
				type="text"
				onChange={(event) => setItemName(event.target.value)}
				placeholder="Name"
				ref={itemNameRef}
				required
			/>
			<br />
			<input
				type="number"
				onChange={(event) => setItemPrice(event.target.value)}
				placeholder="Price"
				ref={itemPriceRef}
				required
			/>
			<br />
			<input
				type="nmber"
				onChange={(event) => setItemQuantity(event.target.value)}
				placeholder="Quntity"
				ref={itemQuantityRef}
				required
			/>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
};

export default AddItemForm;
