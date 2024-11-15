// Build a basic routing setup with react router.

import React from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './ForRouter/Home'
import Contact from './ForRouter/Contact';
import About from './ForRouter/About';

const Routing = () => {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to ="/">Home </Link>
        </li>
        <li>
          <Link to ="/about"> About</Link>
        </li>
        <li>
          <Link to ="/contact">Contact </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>

    </Routes>

    </BrowserRouter>
  )
}

export default Routing
