import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomLink() {
  const navigate = useNavigate()

  const handleClick = () => {
    const currentPath = window.location.pathname

    if (currentPath === '/home-page') {
      navigate('/home-page')
    } else {
      navigate('/not-found')
    }
  }

  return (
    <div>
      <h2>Custom Link</h2>
      <button onClick={handleClick}>Đi đến trang</button>
    </div>
  )
}
