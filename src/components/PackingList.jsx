import Item from "./Item.jsx";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
 return (
  <div className="list">
   <ul>
    {items.map((item) => (
     <Item
      item={item}
      key={item.id}
      onDeleteItem={onDeleteItem}
      onToggleItem={onToggleItem}
     ></Item>
    ))}
   </ul>
  </div>
 );
}
