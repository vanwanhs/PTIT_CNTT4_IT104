import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home02 from './Home02'
import Student from './Student'

export default function Ex02() {
    const routers = createBrowserRouter([
        {path:"/",element:<Home02></Home02>},
        {path:"/student/:name",element:<Student></Student>}
    ])
  return (
    <div>
      <RouterProvider router={routers}/>
    </div>
  )
}
