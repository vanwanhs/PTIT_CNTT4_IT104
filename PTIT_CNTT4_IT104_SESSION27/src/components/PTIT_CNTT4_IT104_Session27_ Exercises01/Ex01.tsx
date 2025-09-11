import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function Ex01() {
    const routers = createBrowserRouter([
        {
            path:'/',
            element:<Navbar></Navbar>,
            children:[
                {
                    index:true,
                    element:<Home />,
                },
                {
                    path:'/about',
                    element:<About />,
                },
                {
                    path:'/contact',
                    element:<Contact />
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}
