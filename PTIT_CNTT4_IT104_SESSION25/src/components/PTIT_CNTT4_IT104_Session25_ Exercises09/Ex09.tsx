import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../PTIT_CNTT4_IT104_Session25_ Exercises03/Login'
import Register from '../PTIT_CNTT4_IT104_Session25_ Exercises04/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default function Ex09() {
  return <RouterProvider router={router} />
}
