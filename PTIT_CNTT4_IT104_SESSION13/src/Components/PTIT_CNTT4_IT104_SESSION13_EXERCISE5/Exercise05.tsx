import React, { Component } from 'react'
import Child from './Child';
type Product = {
  id:number;
  name:string;
  price:number;
  quantity:number;
};
type State = {
  product: Product;
};
export default class Exercise05 extends Component<{},State> {
  constructor(props:{}){
    super(props);
    this.state = {
      product:{
        id:1,
        name: "Bưởi ba roi",
        price: 10000,
        quantity: 3
      }
    }
  }
  render() {
    return (
      <div>
        <Child product={this.state.product}/>
      </div>
    )
  }
}

