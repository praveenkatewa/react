
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App(){

  let foodItems =['Dal','Green vegetable',"Roti",'Salad',"milk",'rice'];

  // let foodItems =[];

  //  let emptyMessage =  foodItems.length ===0 ? <h3>i am still hungry</h3>:null;

  // if(foodItems.length ===0){
  //   return<h3>i am still hungry</h3>
  // }


  return (
  <>
  <h1 className="food-heading">Healthy Food</h1>

  {/* {foodItems.length ===0 ? <h3>i am still hungry</h3>:null} */}

  {/* {emptyMessage} */}

  {/* {foodItems.length ===0  && <h3>i am still hungry</h3>  } */}



<ErrorMessage  items={foodItems}/>
  <FoodItems items={foodItems}/>



</>

  );

}
export default App;
