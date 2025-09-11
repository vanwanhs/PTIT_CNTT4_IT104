import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
   <div>
      <div className='flex justify-center gap-10 py-4 bg-gray-100 text-blue-600 font-medium text-lg'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}
