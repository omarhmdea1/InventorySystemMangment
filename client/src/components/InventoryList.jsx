function InventoryList({ items, deleteItem, getItemtoUpdate }) {
	return (
		<div className="App">
			<>
				<h1>Inventory List</h1>
				<table border={1}>
					<tr>
						<th>Proudct Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.quantity}</td>
							<td>{item.price}</td>
							<td>
								<button
									type="button"
									onClick={() => getItemtoUpdate(item)}
								>
									Edit
								</button>
							</td>
							<td>
								<button
									type="button"
									onClick={() => deleteItem(item.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</table>
			</>
		</div>
	);
}

export default InventoryList;
