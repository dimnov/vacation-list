export default function Stats({ items }) {
 if (!items.length) {
  return (
   <footer className="stats">
    <em>Start adding some items to your packing list 🚀</em>
   </footer>
  );
 }

 const numItems = items.length;
 const numItemsPacked = items.filter((item) => item.packed).length;
 const percentPacked = Math.round((numItemsPacked / numItems) * 100);

 return (
  <footer className="stats">
   <em>
    {percentPacked === 100
     ? "You got everything! Ready to do ✈️"
     : `💼 You have ${numItems} items on your list, and you already packed ${numItemsPacked} (${
        numItems ? percentPacked : 0
       }%)`}
   </em>
  </footer>
 );
}
