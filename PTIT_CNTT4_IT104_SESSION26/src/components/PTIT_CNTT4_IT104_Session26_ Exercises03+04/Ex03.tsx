import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home03 from './Home03'
import Student from './Student'

export default function Ex03() {
    const routers = createBrowserRouter([
        {path:"/",element:<Home03/>},
        {path:"/student/",element:<Student/>}
    ])
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}
