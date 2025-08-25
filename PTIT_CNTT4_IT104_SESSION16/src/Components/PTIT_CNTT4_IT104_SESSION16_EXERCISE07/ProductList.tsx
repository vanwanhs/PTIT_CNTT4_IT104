import React, { Component } from 'react';
import ProductCard from './ProductCard';

type Props = {
  onAddToCart: (product: any) => void;
};

export default class ProductList extends Component<Props> {
  products = [
    { id: 1, name: "Điện thoại Samsung Galaxy", price: 20000000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Điện thoại Iphone14 Promax", price: 20500000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Điện thoại Samsung Galaxy", price: 21000000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Điện thoại Iphone11 Promax", price: 21500000, image: "https://via.placeholder.com/150" },
  ];

  render() {
    return (
      <div className="product-list">
        {this.products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={this.props.onAddToCart} />
        ))}
      </div>
    );
  }
}
