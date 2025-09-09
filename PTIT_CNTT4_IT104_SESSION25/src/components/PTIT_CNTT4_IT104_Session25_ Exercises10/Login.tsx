import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u: any) => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      navigate('/home')
    } else {
      setError('Email hoặc mật khẩu không đúng')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-[320px] space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Đăng nhập
        </button>

        <p className="text-sm text-center">
          Chưa có tài khoản? <Link to="/register" className="text-blue-500">Đăng ký</Link>
        </p>
      </form>
    </div>
  )
}
