import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from './Data';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6 text-red-600 text-center">Sản phẩm không tồn tại.</div>;
  }


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-xl text-gray-700 mb-2">
        Giá: {product.price.toLocaleString()} VND
      </p>
      <p className="text-base text-gray-800">{product.detail}</p>
      <div className='mt-3 bg-blue-800 w-[70px] rounded-2xl'>
        <Link to="/products">Quay Lại</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
