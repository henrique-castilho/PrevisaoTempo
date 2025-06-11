import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeflex/primeflex.min.css';
import 'primereact/resources/themes/lara-dark-blue/theme.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
