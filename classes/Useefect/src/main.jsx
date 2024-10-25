import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Apifetching from './Apifetching'
import './index.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <Apifetching/>
  // </StrictMode>,
)
