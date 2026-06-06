import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css' //global stiller
import App from './App.jsx' //main compo


//reactı root elemente baglıyorum
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)