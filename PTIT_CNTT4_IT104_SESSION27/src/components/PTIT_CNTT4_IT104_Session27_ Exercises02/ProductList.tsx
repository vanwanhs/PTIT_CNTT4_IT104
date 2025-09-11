import React from 'react';
import { Link } from 'react-router-dom';
import products from './Data';

const ProductList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow p-4">
            <img src={product.image} alt={product.name} className="mb-3 w-full h-40 object-cover" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Giá: {product.price.toLocaleString()} VND</p>
            <p className="text-sm mt-1 mb-3">{product.description}</p>
            <Link to={`/products/${product.id}`} className="text-blue-600 underline">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
