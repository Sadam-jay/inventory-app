import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import InventoryForm from "./components/InventoryForm/InventoryForm";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 5 },
    { id: 2, name: "Keyboard", category: "Electronics", quantity: 10 },
    { id: 3, name: "Mouse", category: "Electronics", quantity: 15 },
    { id: 4, name: "Light", category: "Electronics", quantity: 20 },
    { id: 5, name: "Desk", category: "Wooden", quantity: 15 },
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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      <InventoryForm addItem={addItem} />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
        onClick={() => setSortAsc(!sortAsc)}
      >
        Sort by Quantity ({sortAsc ? "Ascending" : "Descending"})
      </Button>

      <FormControl sx={{ minWidth: 200, ml: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <MenuItem value="">All Categories</MenuItem>
          {[...new Set(items.map((item) => item.category))].map(
            (category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

      <InventoryTable
        items={sortedItems}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </Container>
  );
}

export default App;
