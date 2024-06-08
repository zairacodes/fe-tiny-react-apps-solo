import ListItem from "./ListItem";
import Adder from "./Adder";
import { useState } from "react";

function GroceryList() {
  const [items, setItems] = useState(["Milk", "Eggs"]);

  return (
    <>
      <div>
        <h2>Things I need to buy:</h2>
        <ul className="grocery-list">
          {items.map((item) => {
            return <ListItem key={item} item={item} />;
          })}
        </ul>
      </div>
      <div>
        <Adder setItems={setItems} items={items} />
      </div>
    </>
  );
}

export default GroceryList;
