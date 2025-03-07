import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const InventoryTable = ({ items, updateItem, deleteItem }) => {
  const [editById, setEditById] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const edit = (item) => {
    setEditById(item.id);
    setEditedItem(item);
  };

  const saveEdited = () => {
    updateItem(editById, editedItem);
    setEditById(null);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell>
              <strong>Quantity</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                backgroundColor: item.quantity < 10 ? "#ffebee" : "inherit",
              }}
            >
              {editById === item.id ? (
                <>
                  <TableCell>
                    <TextField
                      size="small"
                      value={editedItem.name}
                      onChange={(e) =>
                        setEditedItem({ ...editedItem, name: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      value={editedItem.category}
                      onChange={(e) =>
                        setEditedItem({
                          ...editedItem,
                          category: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      size="small"
                      type="number"
                      value={editedItem.quantity}
                      onChange={(e) =>
                        setEditedItem({
                          ...editedItem,
                          quantity: Number(e.target.value),
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={saveEdited}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => setEditById(null)}
                      sx={{ ml: 1 }}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => edit(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => deleteItem(item.id)}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryTable;
