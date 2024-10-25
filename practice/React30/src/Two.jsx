import React from 'react'
import { useState } from 'react'

function Two() {

     const[count,setcout]=useState(0);
  return (
    <div>
      <button onClick={()=>setcout(count+1)}>+</button>
      <span>{count}</span>
      <button onClick={()=>setcout(count-1)} >-</button>
    </div>
  )
}

export default Two



