import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'

export default function Ex05() {
    const routers = createBrowserRouter([
        {
            path:"\about",
            element:<About></About>
        },
        {
            path:"*",
            element:<NotFound></NotFound>
        }
    ])
  return (
    <div>
      <RouterProvider router ={routers}></RouterProvider>
    </div>
  )
}
