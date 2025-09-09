import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact02 from './Contact02'

export default function Ex02() {
    const routers = createBrowserRouter([
        {
            path:"/contact",
            element:<Contact02></Contact02>
        }
    ])
  return (
    <div>
      <RouterProvider router = {routers}></RouterProvider>
    </div>
  )
}
