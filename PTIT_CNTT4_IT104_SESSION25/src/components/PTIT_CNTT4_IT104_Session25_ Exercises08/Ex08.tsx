import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListUser from './ListUser'
import UserDetail from './UserDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ListUser />,
  },
  {
    path: '/users/:id',
    element: <UserDetail />,
  },
])

export default function Ex08() {
  return <RouterProvider router={router} />
}
