import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CustomLink from '../PTIT_CNTT4_IT104_Session25_ Exercises07/CustomLink'
import HomePage from '../PTIT_CNTT4_IT104_Session25_ Exercises07/HomePage'
import NotFound from '../PTIT_CNTT4_IT104_Session25_ Exercises07/NotFound'

export default function Ex07() {
    const routers = createBrowserRouter([
        {
            path:"/",
            element:<CustomLink></CustomLink>
        },
        {
            path:"/home-page",
            element:<HomePage></HomePage>
        },
        {
            path:"*",
            element:<NotFound></NotFound>
        },
    ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

