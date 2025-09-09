import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

export default function Ex01() {
  return (
    <RouterProvider router={routers} />
    
  )
}
