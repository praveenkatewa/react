import {useEffect, useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const [mycount , setmycount]=useState(0);
  useEffect(()=>{
    alert("hello UseEffect")
  } )


  useEffect(()=>{
    alert("i am aslo useEffect with blank depend..")
  },[])


  useEffect(()=>{
    alert("i am aslo useEffect with blank depend..")

  },[mycount])

  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <button onClick={() => setmycount((mycount) => mycount + 1)}>{mycount}</button>
      
    </>
  )
}

export default App
