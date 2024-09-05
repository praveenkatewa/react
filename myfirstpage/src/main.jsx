import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home  from "../src/components/Home.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Home />
    <Home />
    <App/>
  </StrictMode>,
)
