import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setErrors({ ...errors, [name]: '' }) // clear lỗi khi gõ lại
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: any = {}

    if (!form.email) {
      newErrors.email = 'Email không được để trống'
    }

    if (!form.password) {
      newErrors.password = 'Mật khẩu không được để trống'
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu'
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu không khớp'
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const isEmailExist = users.some((user: any) => user.email === form.email)
    if (isEmailExist) {
      newErrors.email = 'Email đã tồn tại'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    users.push({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password
    })
    localStorage.setItem("users", JSON.stringify(users))

    alert("Đăng ký thành công!")
    navigate("/") // về trang login
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-[350px] space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <p className="text-sm text-gray-500 text-center">Signup now and get full access to our app</p>

        <div className="flex gap-2">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">Signin</Link>
        </p>
      </form>
    </div>
  )
}
