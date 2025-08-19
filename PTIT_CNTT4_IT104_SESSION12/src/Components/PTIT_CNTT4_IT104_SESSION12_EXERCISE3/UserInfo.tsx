import React from 'react'

export default function UserInfo() {
    type User = {
        fullName: string;
        sex: string;
        age: number;
        email: string;
        address: string;
    }
    const user: User = {
        fullName: "Nguyen Van A",
        sex: "Nam",
        age: 12,
        email: "hihi@gamil.com",
        address: "Hà Nội",
    }
  return (
    <div>
      <h2>{user.fullName}</h2>
      <p>{user.sex}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
      <p>{user.address}</p>
    </div>
  )
}
