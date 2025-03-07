import React, { useState } from "react";
import { TextField, Button, Paper, Box } from "@mui/material";

const InventoryForm = ({ addItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: 0,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem({ name: "", category: "", quantity: 0 });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <form onSubmit={onSubmitHandler}>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            required
          />
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            value={newItem.category}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
            required
          />
          <TextField
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: Number(e.target.value) })
            }
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Add Item
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default InventoryForm;
