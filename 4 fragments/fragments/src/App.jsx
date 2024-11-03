
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Fooditems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

  let foodItems =['Dal','Green vegetable',"Roti",'Salad',"milk"];

  // let foodItems =[];

  //  let emptyMessage =  foodItems.length ===0 ? <h3>i am still hungry</h3>:null;

  // if(foodItems.length ===0){
  //   return<h3>i am still hungry</h3>
  // }


  return (
  <>
  <h1>Healthy Food</h1>

  {/* {foodItems.length ===0 ? <h3>i am still hungry</h3>:null} */}

  {/* {emptyMessage} */}

  {/* {foodItems.length ===0  && <h3>i am still hungry</h3>  } */}



<ErrorMessage/>
  <Fooditems/>



</>

  );
}

export default App
