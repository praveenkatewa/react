import styles from "./Item.module.css";



// const Item =(props)=>{

  // let {FoodItem}=props;       //data distucure

  const Item =({FoodItem})=>{   // direct destucre

    // for button handle

    // const handleBuyButtonClicked =(FoodItem)=>{
    //   console.log(`${FoodItem} being bought`)
    // }

    // 2nd way 

    // const handleBuyButtonClicked =()=>{
    //   console.log(`${FoodItem} being bought`)
    // }



    // 3rd way

    const handleBuyButtonClicked =(event)=>{
      console.log(event)
      console.log(`${FoodItem} being bought`)
    }


  return (
  // <li  className="list-group-item"> {props.FoodItem}</li>



  // <li  className="list-group-item kg-item"> <span className="kg-span">{FoodItem}</span></li>
  // );



  // css module



  <li  className={`${styles['kg-item']} list-group-item`}> <span className={styles['kg-span']}>{FoodItem}</span>

  {/* for direct use */}

  {/* <button className={`${styles.button} btn btn-info`} onClick={()=> console.log(`${FoodItem} being bought`)}>Buy</button> */}





  {/* for make a varible for button work */}
{/* 
  <button className={`${styles.button} btn btn-info`} onClick={()=> handleBuyButtonClicked( FoodItem)}>Buy</button> */}

  

  {/* 2nd way */}
  
  {/* <button className={`${styles.button} btn btn-info`} onClick={ handleBuyButtonClicked}>Buy</button> */}



  {/* 3rd way */}


  <button className={`${styles.button} btn btn-info`} onClick={(event)=> handleBuyButtonClicked(event)}>Buy</button>
  
  
  </li>

  );

};

export default Item;