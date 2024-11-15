// build a timer that counts down from a specified time.

import React,{useEffect, useState} from 'react'

function Timer(){

  const [time,setTime]= useState(60);

  useEffect(()=>{
    if(time>0){
      const timer=setTimeout(()=>setTime(time-1),100)
      return ()=> clearTimeout(Timer)
    }

  },[time])


  return <>
  time left:{time} second


  </>
}

export default  Timer;