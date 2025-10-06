import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Divide, Flower, Loader, LoaderCircle } from 'lucide-react';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Workbook from './Components/WorkBook/Workbook.jsx';
import Users from './Components/Users/Users.jsx';
import UserBox from './Components/Users/User/UserBox/UserBox.jsx';
// import { createBrowserRouter, } from "react-router";

const myPro = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: '/work', Component: Workbook},
      {
        path: '/users',
        // loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: 
        <Suspense HydrateFallback={LoaderCircle}>
          <Users myPro={myPro}></Users>
        </Suspense>,
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserBox,
      }
    ]
    // element: <div className='flex p-auto'> <Flower></Flower> <p className='bg-red-600'>Hellow From PHT!</p></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
