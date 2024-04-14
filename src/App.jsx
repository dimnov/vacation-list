import Form from "./components/Form.jsx";
import Logo from "./components/Logo.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";
import { useState } from "react";

export default function App() {
 const [items, setItems] = useState([]);

 function handleAddItems(item) {
  setItems((items) => [...items, item]);
 }

 function handleDeleteItem(itemId) {
  setItems((items) => items.filter((item) => item.id !== itemId));
 }

 function handleToggleItem(itemId) {
  setItems((items) =>
   items.map((item) =>
    item.id === itemId ? { ...item, packed: !item.packed } : item
   )
  );
 }

 function handleClearList() {
  const confirmed = window.confirm(
   "Are you sure you want to delete all items?"
  );

  if (confirmed) setItems([]);
 }

 return (
  <div className="app">
   <Logo />
   <Form onAddItems={handleAddItems} />
   <PackingList
    onToggleItem={handleToggleItem}
    onDeleteItem={handleDeleteItem}
    onClearList={handleClearList}
    items={items}
   />
   <Stats items={items} />
  </div>
 );
}
