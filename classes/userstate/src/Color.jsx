import React, { useState } from 'react'

function Color(){

     // function mycolor(){
     //      console.log("this is mycolor function")
     // }
       
     let [color,setcolor]=useState('')
     function mycolor(e){
          // console.log(e.target.value)
          color=e.target.value
          setcolor(color)
          console.log(color)
        
     }

     return (
          <div className="color" style={{backgroundColor:color}}>
               <h1>this is our com ponent</h1>
               <input type="color" onChange={mycolor}></input>
          </div>
     )
}

export default Color