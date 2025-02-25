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
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';




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
        path: "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
       element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    
  </StrictMode>,
)
