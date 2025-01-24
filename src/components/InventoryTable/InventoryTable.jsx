import React, { useState } from "react";
import "./InventoryTable.css";

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
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            style={{
              backgroundColor: item.quantity < 10 ? "lightcoral" : "white",
            }}
          >
            {editById === item.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={editedItem.name}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editedItem.category}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, category: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editedItem.quantity}
                    onChange={(e) =>
                      setEditedItem({
                        ...editedItem,
                        quantity: Number(e.target.value),
                      })
                    }
                  />
                </td>
                <td>
                  <button onClick={saveEdited}>Save</button>
                  <button onClick={() => setEditById(null)}>Cancel</button>
                </td>
              </>
            ) : (
              <>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => edit(item)}>Edit</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
