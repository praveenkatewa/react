 import Item from "./Item";
 
 const FoodItems =({items})=>{
  // let FoodItems =['Dal','Green vegetable',"Roti",'Salad',"milk"];

  return ( 
  // <ul className="list-group">
  // {FoodItems.map((item)=>
  // (<Item key={item} FoodItem={item}/>))}
   
  // </ul>


   <ul className="list-group">
  {items.map((item)=>
  (<Item key={item} FoodItem={item}/>))}
   
  </ul>
  );
 };

 export default FoodItems;