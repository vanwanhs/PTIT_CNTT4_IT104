import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Register from '../PTIT_CNTT4_IT104_Session25_ Exercises04/Register'
import Home from './Home'

export default function Ex10() {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/home', element: <Home /> },
  ])

  return <RouterProvider router={router} />
}
