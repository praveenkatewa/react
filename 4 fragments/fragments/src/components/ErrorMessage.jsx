const ErrorMessage =()=>{
  let foodItems =['Dal','Green vegetable',"Roti",'Salad',"milk"];

  return <>{ foodItems.length ===0  && <h3>i am still hungry</h3>  }
  </> 
};

export default ErrorMessage;