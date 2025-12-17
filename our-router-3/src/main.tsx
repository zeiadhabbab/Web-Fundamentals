import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routerlist } from './routerlist'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerlist} />
  </StrictMode>
)
