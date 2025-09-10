import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [name, setName] = useState('')

  useEffect(() => {
    const studentName = searchParams.get('studentName') || ''
    setName(studentName)
  }, [searchParams])

  const handleSearch = () => {
    if (name.trim()) {
      setSearchParams({ studentName: name.trim() })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h2 className="text-xl font-semibold">Tìm kiếm sinh viên</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nhập tên sinh viên..."
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tìm kiếm
        </button>
      </div>

      {searchParams.get('studentName') && (
        <p className="mt-4 text-green-600">
          Kết quả tìm kiếm cho: <strong>{searchParams.get('studentName')}</strong>
        </p>
      )}
    </div>
  )
}
