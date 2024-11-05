import styles from "./Item.module.css";



// const Item =(props)=>{

  // let {FoodItem}=props;       //data distucure

  const Item =({FoodItem})=>{   // direct destucre

  return (
  // <li  className="list-group-item"> {props.FoodItem}</li>



  // <li  className="list-group-item kg-item"> <span className="kg-span">{FoodItem}</span></li>
  // );



  // css module

  <li  className={`${styles['kg-item']} list-group-item`}> <span className={styles['kg-span']}>{FoodItem}</span></li>
  );

};

export default Item;