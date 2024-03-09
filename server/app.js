const express = require("express");
const path = require("path");

// need to rewrite app.js file
const app = express();
const port = process.env.PORT || 3500;
const InventoryRoutes = require("./routes/inventory_routes");

app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", function (req, res) {
// 	const index = path.join(__dirname, "build", "index.html");
// 	res.sendFile(index);
// });

app.use("/api/inventory", InventoryRoutes);

// app.post("/api", (req, res) => {
// 	res.json({ requestBody: req.body, hi: "Omar" }); // <==== req.body will be a parsed JSON object
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
