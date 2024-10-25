import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignInSignupWithLocalStorage from './SignInSignUp/SignInSignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <SignInSignupWithLocalStorage/>
  </StrictMode>,
)
