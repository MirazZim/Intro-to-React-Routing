import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import User from './Components/User/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children : [
      {
        path: "/about",
       element: <About></About>,
      },
      {
        path: "/contact",
       element: <Contact></Contact>,
      },
      {
        path: "/Users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
       element: <User></User>,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
