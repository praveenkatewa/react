import { useState } from 'react'
import './App.css'
import Home from './Home'
import Footer from './Footer'
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
     <Footer val={count}/>
    </>
  )
}

export default App
