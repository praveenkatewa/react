// create a component that fetches data from an API and displays it.


import React, { useEffect, useState } from 'react'

function Six() {

  useEffect(()=>{

    const [data,setDate]=useState(null);



    fetch('https://jsonplaceholder.typicode.com/todos/1') .then((response)=>response.json())
    .then((data)=>setData(data))
  },[])

  return (
    <div>
    {
      data? (
        <div>
        <h1>Title:{data.title}</h1>

        </div>
      ):(
        <P>
          loading
        </P>
      )
    }
      
    </div>
  )
}

export default Six
