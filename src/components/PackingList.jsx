import Item from "./Item.jsx";

export default function PackingList({ items, onDeleteItem }) {
 return (
  <div className="list">
   <ul>
    {items.map((item) => (
     <Item item={item} key={item.id} onDeleteItem={onDeleteItem}></Item>
    ))}
   </ul>
  </div>
 );
}
