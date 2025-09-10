import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  // Thông tin user cố định (giả lập)
  const userInfo = {
    email: 'admin@gmail.com',
    password: '123456',
    role: 'admin'
  }

  // State lưu form nhập
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: ''
  })

  // State báo lỗi
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      form.email === userInfo.email &&
      form.password === userInfo.password &&
      form.role === userInfo.role
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/account')
    } else {
      setError('Thông tin đăng nhập không đúng!')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-[350px] space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">-- Chọn quyền --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white p-2 rounded hover:bg-blue-700"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  )
}
