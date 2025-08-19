import React from 'react'

export default function Calculation() {
  const a = 10;
  const b = 5;

  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => y !== 0 ? x / y : "Không chia được";

  return (
    <div>
      <h1>Danh sách kết quả</h1>
      <ul>
        <li>Cộng: {add(a, b)}</li>
        <li>Trừ: {subtract(a, b)}</li>
        <li>Nhân: {multiply(a, b)}</li>
        <li>Chia: {divide(a, b)}</li>
      </ul>
    </div>
  )
}
