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

 return (
  <div className="app">
   <Logo />
   <Form onAddItems={handleAddItems} />
   <PackingList onDeleteItem={handleDeleteItem} items={items} />
   <Stats />
  </div>
 );
}
