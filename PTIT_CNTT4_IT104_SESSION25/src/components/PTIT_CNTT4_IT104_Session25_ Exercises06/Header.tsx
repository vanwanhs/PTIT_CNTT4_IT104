import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>
        Product
      </NavLink>
      <NavLink to="/detail" className={({ isActive }) => isActive ? 'active' : ''}>
        Detail
      </NavLink>
      <br />
      <Outlet></Outlet>
    </div>
  )
}
