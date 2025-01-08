import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <Header></Header>,
  },
  {
    path: "/Contact",
    element: <div>Call me Right now</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
