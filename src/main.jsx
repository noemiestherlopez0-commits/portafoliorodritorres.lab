import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ux.css'
import App from './App.jsx'
import { iniciarContadores } from './contador.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

iniciarContadores()
