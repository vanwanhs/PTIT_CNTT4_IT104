import React, { Component } from 'react';
import Header from '../Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE07/Header';
import ProductList from '../Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE07/ProductList';
import Cart from '../Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE07/Cart';

type State = {
  cart: any[];
};

export default class ProductPage extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  handleAddToCart = (product: any) => {
    const existing = this.state.cart.find(item => item.id === product.id);
    if (existing) {
      this.setState({
        cart: this.state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      this.setState({
        cart: [...this.state.cart, { ...product, quantity: 1 }],
      });
    }
  };

  render() {
    return (
      <div>
        <Header cartCount={this.state.cart.length} />
        <ProductList onAddToCart={this.handleAddToCart} />
        {/* Optional: show Cart here */}
        {/* <Cart items={this.state.cart} /> */}
      </div>
    );
  }
}
