import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigates = useNavigate();
    const handleLogin =() =>{
        navigates("/login");
    }
  return (
    <div>
      <p>Information</p>
      <button onClick={handleLogin}> Login</button>
    </div>
  )
}
