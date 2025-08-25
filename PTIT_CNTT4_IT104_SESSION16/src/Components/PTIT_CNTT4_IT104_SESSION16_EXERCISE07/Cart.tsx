// src/Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE07/Cart.tsx
import React, { Component } from 'react';

type Props = {
  visible: boolean;
};

export default class Cart extends Component<Props> {
  render() {
    if (!this.props.visible) return null;

    return (
      <div className="cart">
        <h3>Cart</h3>
        <ul>
          <li>Điện thoại Samsung Galaxy - 1 x 20.000.000 đ</li>
          <li>Điện thoại iPhone14 Promax - 1 x 20.500.000 đ</li>
        </ul>
        <hr />
        <p><strong>Tổng tiền:</strong> 40.500.000 đ</p>
      </div>
    );
  }
}
