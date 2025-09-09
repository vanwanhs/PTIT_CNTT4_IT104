import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1300,
  },
  {
    id: 2,
    name: "Iphone 12",
    price: 21300,
  },
  {
    id: 3,
    name: "Iphone 122",
    price: 13002,
  }
];

export default function ProductManager() {
  const [products, setProducts] = useState<any[]>(data);

  return (
    <div>
      <h2>Trang quản lí sản phẩm</h2>
      <table border={1} cellPadding={33}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá </th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()}</td>
              <td><button className='text-red-500 ml-4'>Xem chi tiết</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
