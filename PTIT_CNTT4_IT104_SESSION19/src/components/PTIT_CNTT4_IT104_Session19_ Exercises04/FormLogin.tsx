import React, { useState } from 'react'

export default function FormLogin() {
  const [data, setData] = useState({ name: '', email: '' });
  const [error, setError] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;


    setData({ ...data, [name]: value });


    if (!value.trim()) {
      setError((prev) => ({ ...prev, [name]: `${name} không được để trống` }));
    } else {
      setError((prev) => ({ ...prev, [name]: '' }));
    }

  
    if (name === "email" && value.trim()) {
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        setError((prev) => ({ ...prev, email: "Email không hợp lệ" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!error.name && !error.email && data.name && data.email) {
      alert("Gửi thành công!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
