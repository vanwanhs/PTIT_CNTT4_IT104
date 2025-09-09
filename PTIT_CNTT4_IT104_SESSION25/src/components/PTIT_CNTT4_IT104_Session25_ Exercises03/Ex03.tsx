import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'

export default function Ex03() {
    const routers = createBrowserRouter([
        {
            path:"/login",
            element:<Login></Login>
        }
    ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
