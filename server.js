const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let items = [
  { id: 1, name: "Pizza", price: 200 },
  { id: 2, name: "Burger", price: 150 }
];

// GET items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST add item
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  items.push(newItem);
  res.json(newItem);
});

// ✅ DELETE item (NEW PART)
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);

  items = items.filter(item => item.id !== id);

  res.json({ message: "Item deleted" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});