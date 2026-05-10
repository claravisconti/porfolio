import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom' // <-- Importa esto
import App from './App'
import './index.css'
import './i18n.js'
import ReactGA from "react-ga4";

ReactGA.initialize("G-XSZFR9EYG3");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </React.StrictMode>,
)