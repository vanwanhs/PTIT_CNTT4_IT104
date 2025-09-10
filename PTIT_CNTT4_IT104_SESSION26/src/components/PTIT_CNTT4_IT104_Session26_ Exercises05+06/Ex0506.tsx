import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Account from './Account'
import PrivateRouter from './PrivateRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <PrivateRouter />,
    children: [
      {
        path: '/account',
        element: <Account />
      }
    ]
  }
])

export default function Ex0506() {
  return <RouterProvider router={router} />
}
