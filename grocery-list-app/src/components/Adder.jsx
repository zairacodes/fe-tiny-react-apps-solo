import { useState } from "react";

function Adder({ setItems, items }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem("");
  }

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="add-item-label" htmlFor="add-item">
        New item:
      </label>
      <input
        id="add-item"
        type="text"
        placeholder="Enter item..."
        className="add-item-input"
        onChange={handleChange}
        value={newItem}
        required
      />
      <button>Add Item</button>
    </form>
  );
}

export default Adder;
