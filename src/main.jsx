import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DesingGraphicApp } from './DesingGraphicApp.jsx'


import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DesingGraphicApp />
    </BrowserRouter>
  </React.StrictMode>,
)
