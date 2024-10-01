import { useState } from 'react';
import './App.css'

function App() {
 
// let name="Aman sharma"

// let count =50;

// function inc(){
//   count++;
//   console.log(count)
// };
// function dec(){
//   count--;
//   console.log(count)
// };

// use of usestate

let [count,setcount]= useState(0)

function inc(){
   setcount (count++);
    
  };
  function dec(){
    setcount(count--);
    
  };


 
  return (
    <>
    {/* <h1>hey this is praveen</h1> */}
    {/* <h1>hey this is {name}</h1> */}

    <button onClick={inc}>+</button>
    <span className='cont'>{count}</span>
    <button onClick={dec}>- </button>
     
    </>
  )
}

export default App
