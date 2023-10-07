import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Pages/Root/Routes.jsx'
import AuthProvider from './Auth/AuthProvider'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)






// https://i.ibb.co/SnSsNC5/mobo.jpg
// https://i.ibb.co/5xRg7RL/pc.jpg
// https://i.ibb.co/DMm7skr/trace.jpg
// 