// create a component that fetches data from an API and displays it.


import React, { useEffect,useState  } from 'react'

function Six() {
  const [data,setData]=useState(null);

  useEffect(()=>{

    



    fetch('https://jsonplaceholder.typicode.com/posts/1') 
    .then((response)=>response.json())
    // .then((data)=>console.log(data))
    .then((json)=>setData(json))
  },[])

  return (
    <div>
    {
    data? (
      <div>
    <h1>Title :{data.title}</h1>
    <h1>Body :{data.body}</h1>

    </div>
    ) :(
      <p>
        loading....
      </p>
    )
    }
   
      
    </div>
  )
}

export default Six
