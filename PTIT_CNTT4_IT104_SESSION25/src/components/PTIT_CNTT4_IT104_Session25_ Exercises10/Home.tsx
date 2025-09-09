import React from 'react'

export default function Home() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow w-[350px] text-center">
        <h2 className="text-2xl font-bold mb-4">Home Page</h2>
        <p className="text-gray-700">Chào mừng, <span className="font-semibold">{currentUser.firstName} {currentUser.lastName}</span></p>
        <p className="text-gray-500 text-sm mt-2">Email: {currentUser.email}</p>
      </div>
    </div>
  )
}
