
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Signup from './components/Signup'
import Done from './components/Done'
import Login from './components/Login'
import Dropdown from './components/Dropdown'
import Logout from './components/Logout'



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Homepage/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Done" element={<Done/>}></Route>
        <Route path="/Dropdown" element={<Dropdown/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>    

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
