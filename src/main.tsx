import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './Components/Login.tsx'
import Notfound from './Components/Notfound.tsx'
import Loginph from './Components/Loginph.tsx'
import 'react-phone-input-2/lib/style.css';



import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  errorElement: <Notfound />,
},
{
  path: '/login',
  element: <Login />
},
{
  path: '/loginph',
  element: <Loginph />

}

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
