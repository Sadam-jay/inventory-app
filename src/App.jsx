import "./App.css";
import { useState } from "react";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import InventoryForm from "./components/InventoryForm/InventoryForm";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      quantity: 5,
    },
    {
      id: 2,
      name: "Keyboard",
      category: "Electronics",
      quantity: 10,
    },
    {
      id: 4,
      name: "Light",
      category: "Electronics",
      quantity: 20,
    },
    {
      id: 3,
      name: "Mouse",
      category: "Electronics",
      quantity: 15,
    },
    {
      id: 5,
      name: "Desk",
      category: "Wooden",
      quantity: 15,
    },
  ]);

  const [sortAsc, setSortAsc] = useState(true);
  const [filter, setFilter] = useState("");

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  const updateItem = (id, updateItem) => {
    setItems(items.map((item) => (item.id === id ? updateItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  const sortedItems = filteredItems.sort((a, b) =>
    sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="container">
      <h1 className="heading">Inventory Management</h1>
      <InventoryForm addItem={addItem} />
      <button className="sort-btn" onClick={() => setSortAsc(!sortAsc)}>
        Sort by Quantity ({sortAsc ? "Ascending" : "Descending"})
      </button>
      <select
        className="filter-list"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Category</option>
        {[...new Set(items.map((item) => item.category))].map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          )
        )}
      </select>
      <InventoryTable
        items={sortedItems}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
