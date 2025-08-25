import React, { Component } from 'react';

type Props = {
  product: any;
  onAddToCart: (product: any) => void;
};

export default class ProductCard extends Component<Props> {
  render() {
    const { name, price, image } = this.props.product;
    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price.toLocaleString()} đ</p>
        <button onClick={() => this.props.onAddToCart(this.props.product)}>
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}
