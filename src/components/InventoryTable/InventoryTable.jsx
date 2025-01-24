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
    <table className="inventory-table">
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
            className={`inventory-row ${item.quantity < 10 ? "low-stock" : ""}`}
          >
            {editById === item.id ? (
              <>
                <td>
                  <input
                    type="text"
                    className="edit-input"
                    value={editedItem.name}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="edit-input"
                    value={editedItem.category}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, category: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="edit-input"
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
                  <button className="save-btn" onClick={saveEdited}>
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditById(null)}
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="edit-btn" onClick={() => edit(item)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
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
