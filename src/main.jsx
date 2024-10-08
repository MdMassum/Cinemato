import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import axios from 'axios'

// axios setup -->
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
