import React from 'react'
import Cart from './Cart';

export default function Main() {
  const carts = Array(12).fill(0); // tạo mảng 12 phần tử

  return (
    <div
      style={{
        backgroundColor: '#ffecec',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',//tạo ra 4 cột
        gap: '20px',
        padding: '20px',
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      {carts.map((_, index) => (
        <Cart key={index} />
      ))}
    </div>
  );
}

