import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      Trang quản lí <br />
      <NavLink to="/admin/user">Quản lí người dùng</NavLink> <br />
      <NavLink to="/admin/product">Quản lí sản phẩm</NavLink> <br />
    <NavLink to="/admin/order">Quản lí hóa đơn</NavLink> <br /> <hr />
    
    <Outlet></Outlet>
    </div>
  )
}
