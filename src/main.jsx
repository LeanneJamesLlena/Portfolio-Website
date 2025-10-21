import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'

import App from './App.jsx'
/**
 * Main Component
 *Wrap the App component inside BrowserRouter because by default React doesnt have any concepts about
 *Routing, BrowserRouter updates React Router about the current url where the user is
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
