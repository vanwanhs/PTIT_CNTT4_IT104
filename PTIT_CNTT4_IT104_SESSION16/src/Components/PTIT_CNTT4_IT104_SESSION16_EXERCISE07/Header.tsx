import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  cartCount?: number;
};

export default class Header extends Component<Props> {
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">Trang chủ</Link> | <Link to="/">Danh sách sản phẩm</Link>
        </div>
        <div>
          <Link to="/cart">🛒 ({this.props.cartCount || 0})</Link>
        </div>
      </div>
    );
  }
}
