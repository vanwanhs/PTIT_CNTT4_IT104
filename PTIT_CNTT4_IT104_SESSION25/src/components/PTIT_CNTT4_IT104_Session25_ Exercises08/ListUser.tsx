import React from 'react'
import { useNavigate } from 'react-router-dom'

const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'a@gmail.com', address: 'Hà Nội' },
  { id: 2, name: 'Trần Thị B', email: 'b@gmail.com', address: 'Đà Nẵng' },
  { id: 3, name: 'Lê Văn C', email: 'c@gmail.com', address: 'TP.HCM' },
]

export default function ListUser() {
  const navigate = useNavigate()

  const handleViewDetail = (id: number) => {
    navigate(`/users/${id}`)
  }

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p> {user.name}</p>
            <p> {user.email}</p>
            <p> {user.address}</p>
            <button onClick={() => handleViewDetail(user.id)}>Xem chi tiết</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}
