import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeClass =
    'text-blue-600 font-semibold underline underline-offset-4';

  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav className="flex space-x-6 justify-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? activeClass : 'text-gray-700'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? activeClass : 'text-gray-700'
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) =>
            isActive ? activeClass : 'text-gray-700'
          }
        >
          Detail
        </NavLink>
      </nav>
    </header>
  );
}
