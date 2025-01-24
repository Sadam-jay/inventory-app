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
      id: 3,
      name: "Mouse",
      category: "Electronics",
      quantity: 15,
    },
    {
      id: 4,
      name: "Light",
      category: "Electronics",
      quantity: 20,
    },
  ]);

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  const updateItem = (id, updateItem) => {
    setItems(items.map((item) => (item.id === id ? updateItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <InventoryForm addItem={addItem} />
      <InventoryTable
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
