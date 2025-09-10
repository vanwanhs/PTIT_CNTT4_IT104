import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {name} = useParams()
  return (
    <div>
      <div className="text-center mt-10 text-xl">
      <p>Thông tin của sinh viên</p>
      <p className="font-bold text-blue-600">Tên sinh viên: {name}</p>
    </div>
    </div>
  )
}
