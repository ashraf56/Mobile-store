import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllContext from './AllContext/AllContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
  
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   
    <AllContext> 
      <QueryClientProvider client={queryClient}>

      <App />  
      </QueryClientProvider>
    </AllContext>
   
  </React.StrictMode>,
)
