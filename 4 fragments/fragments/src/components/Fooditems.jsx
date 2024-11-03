 const Fooditems =()=>{
  let Fooditems =['Dal','Green vegetable',"Roti",'Salad',"milk"];

  return ( <ul className="list-group">
  {Fooditems.map((item)=><li  key={item} className="list-group-item"> {item}</li>)}
   
  </ul>
  );
 };

 export default Fooditems;