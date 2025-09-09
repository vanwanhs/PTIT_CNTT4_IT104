import React from 'react'
import { useParams } from 'react-router-dom'

const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com', address: 'Hà Nội' },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com', address: 'Đà Nẵng' },
  { id: 3, name: 'Lê Văn C', email: 'c@gmail.com', address: 'TP.HCM' },
]

export default function UserDetail() {
  const { id } = useParams()
  const user = users.find(u => u.id === Number(id))

  if (!user) {
    return <p> Không tìm thấy người dùng</p>
  }

  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      <p> Tên: {user.name}</p>
      <p> Email: {user.email}</p>
      <p> Địa chỉ: {user.address}</p>
    </div>
  )
}
