import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register'

export default function Ex04() {
    const routers = createBrowserRouter([
        {
            path:"/register",
            element:<Register></Register>
        }
    ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
