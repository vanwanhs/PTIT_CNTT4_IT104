import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="text-center mt-10 text-xl">
      <p>Trang chi tiết sản phẩm</p>
      <p className="font-bold text-blue-600">ID sản phẩm: {id}</p>
    </div>
  )
}
