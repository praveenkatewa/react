import { useState } from 'react'
import './App.css'
import Footer from './footer'
import Home from './Home'
import Xyx from './Xyz'
import Xyz from './Xyz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
  
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     <Home val={count} />
     {/* <Home val={count} myname={"anuj"} /> */}
     
     {/* <Home val={{name:"aman"}} /> not working */}
     <Footer val={count}/>
     
    </>
  )
}

export default App
