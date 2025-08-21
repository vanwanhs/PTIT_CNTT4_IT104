import React, { Component } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type InitialState = {
  product: Product;
};

export default class Exercise05 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: '',
        name: '',
        price: 0,       
        quantity: 0,    
      },
    };
  }
   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({
        product: {
          ...this.state.product,
          [name]: value,
        },
      });
    };
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Thông tin đăng nhập:', this.state.product);
        //Gửi dữ liệu lên sever
        this.setState({
            product: {
                id:"",
                name:"",
                price:0,
                quantity:0
            }
        })
      };
    
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h3>Thông tin sản phẩm</h3>
        <p>Mã sản phẩm</p>
        <input type="text"
            placeholder='Mời nhập mã sản phẩm'
            name='id'
            value={this.state.product.id}
            onChange={this.handleChange}
        /> <br /> <br />
        <p>Tên sản phẩm</p>
        <input type="text"
            placeholder='Mời bạn nhập tên sản phẩm'
            name='name'
            value={this.state.product.name}
            onChange={this.handleChange}
        /> <br /> <br />
        <p>Giá</p>
        <input type="text" 
            placeholder='Mời bản nhập giá sản phẩm'
            name='price'
            value={this.state.product.price}
            onChange={this.handleChange}
        /> <br /> <br />
        <p>Số lượng sản phẩm</p>
        <input type="number"
            placeholder='Mời bạn nhập số lượng sản phẩm'
            name='quantity'
            value={this.state.product.quantity}
            onChange={this.handleChange}
        
        /> <br /> <br />
        <button type='submit'>Đăng Kí</button>
        </form>
      </div>
    );
  }
}
