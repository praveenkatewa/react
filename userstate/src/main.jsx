import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Color from './Color'
import SignupForm from './SignupForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Color/> */}
    <SignupForm/>
  </StrictMode>,
)
