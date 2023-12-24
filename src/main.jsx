import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllContext from './AllContext/AllContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllContext>
      <App /> 
    </AllContext>
   
  </React.StrictMode>,
)
