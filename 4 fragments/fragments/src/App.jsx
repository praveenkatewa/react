
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";

function App(){

  let foodItems =['Dal','Green vegetable',"Roti",'Salad',"milk",'rice'];

  // let foodItems =[];

  //  let emptyMessage =  foodItems.length ===0 ? <h3>i am still hungry</h3>:null;

  // if(foodItems.length ===0){
  //   return<h3>i am still hungry</h3>
  // }


  return (

    //  for fragment


//    <>

//    <h1 className="food-heading">Healthy Food</h1>
//     <ErrorMessage  items={foodItems}/> 
//     <FoodItems items={foodItems}/> 
//     </>


// ** use of traniray operator

//   {/* {foodItems.length ===0 ? <h3>i am still hungry</h3>:null} */}

//   {/* {emptyMessage} */}

//   {/* {foodItems.length ===0  && <h3>i am still hungry</h3>  } */}










// use of container for childern
// use here 2 container then cover in fragment
<>
<Container>
<h1 className="food-heading">Healthy Food</h1>
<ErrorMessage  items={foodItems}/>
<FoodInput/>

  <FoodItems items={foodItems}/>

</Container>


{/* <Container>
  <p>Above is the list of healthy foods that are goood for your health and well being.

  </p>
</Container> */}

</>

  );

}
export default App;
