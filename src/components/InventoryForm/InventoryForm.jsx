import React, { useState } from "react";
import "./InventoryForm.css";

const InventoryForm = ({ addItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: 0,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({
      name: "",
      category: "",
      quantity: 0,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={newItem.category}
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InventoryForm;
