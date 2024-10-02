import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Apifetching() {
     const [product,setproduct]=useState({});



     async function FetchApi() {
          const APIDATA=  await fetch('https://dummyjson.com/products');
          const JSON_DATA =await APIDATA.json(); 
          setproduct(JSON_DATA.products)
          
     }
     console.log(product,">>>>>>>>product<<<<<<<")

     useEffect(()=>{
          
          FetchApi()},

     []);
     
  return (
  <>
  {product.map((item)=>(
     <div class="card" style={{width:"18rem"}}>
     <div class="card-body">
          <p class="card-text">
               some quick example text
          </p>
     </div>

     </div>

  ))}
    
  </>
);
}

export default Apifetching;
