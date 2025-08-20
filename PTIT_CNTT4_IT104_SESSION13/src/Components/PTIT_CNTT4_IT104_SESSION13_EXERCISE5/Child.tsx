import React, { Component } from 'react'
type Product = {
  id:number;
  name:string;
  price:number;
  quantity:number;
};
type Props = {
  product: Product;
}
export default class Child extends Component<Props> {
  render() {
    const {id,name,price,quantity} = this.props.product;
    return (
      <div>
        <h2>Thông tin đơn hàng</h2>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Prince: {price}</p>
        <p>Quantity:{quantity}</p>
      </div>
    )
  }
}


