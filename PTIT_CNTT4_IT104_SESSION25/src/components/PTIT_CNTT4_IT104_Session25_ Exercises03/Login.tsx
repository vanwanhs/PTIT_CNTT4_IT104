import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[320px] rounded-xl bg-white p-8 text-gray-800 shadow-md">
        <p className="text-2xl font-bold mb-4 text-center">Login</p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1">Username</label>
            <input type="text" id="username" name="username" className="border p-2 rounded" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password</label>
            <input type="password" id="password" name="password" className="border p-2 rounded" />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign in</button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <p className="text-sm text-center mt-6">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
