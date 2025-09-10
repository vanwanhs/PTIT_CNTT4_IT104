import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import ProductDetail from './ProductDetail'

export default function Ex01() {
    const routers = createBrowserRouter([
        {path:"/",element:<Home></Home>},
        {path:"/product/:id",element:<ProductDetail></ProductDetail>}
    ])
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}
