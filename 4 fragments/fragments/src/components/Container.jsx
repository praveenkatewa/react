 import styles from "./Container.module.css";
//  const Container = (props)=>{

//   return <div className={styles.container}>{props.children}</div>


//  };




//  also pass direct children or more property 


const Container = ({ children })=>{

  return <div className={styles.container}>{children}</div>


 };

 export default Container;