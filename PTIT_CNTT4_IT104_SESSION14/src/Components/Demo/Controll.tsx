import React, { Component } from 'react';

// Định nghĩa kiểu dữ liệu
type User = {
  email: string;
  passWord: string;
};

type InitialState = {
  user: User;
};

export default class Controll extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: '',
        passWord: '',
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Thông tin đăng nhập:', this.state.user);
    //Gửi dữ liệu lên sever
    this.setState({
        user: {
            email:"",
            passWord:""
        }
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <label>PassWord</label>
          <input
            type="password"
            name="passWord"
            value={this.state.user.passWord}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
    );
  }
}
