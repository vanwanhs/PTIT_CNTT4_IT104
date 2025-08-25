import React, { Component, ChangeEvent, FormEvent } from 'react';

type State = {
  name: string;
  email: string;
  age: number | string;
  errors: {
    name?: string;
    email?: string;
    age?: string;
  };
  isSubmitted: boolean;
};

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      errors: {},
      isSubmitted: false,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    let errors: State['errors'] = {};

    if (!name.trim()) {
      errors.name = 'Tên không được để trống';
    }

    if (!email.trim()) {
      errors.email = 'Email không được để trống';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!age || Number(age) <= 0) {
      errors.age = 'Tuổi phải lớn hơn 0';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({
        errors: {},
        isSubmitted: true,
      });
    }
  };

  handleClear = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      errors: {},
      isSubmitted: false,
    });
  };

  render() {
    const { name, email, age, errors, isSubmitted } = this.state;

    const errorStyle = { color: 'red', margin: '5px 0' };

    if (isSubmitted) {
      return (
        <div style={{ padding: '20px' }}>
          <h3>Thông tin bạn đã nhập:</h3>
          <p><strong>Họ tên:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Tuổi:</strong> {age}</p>
          <button onClick={this.handleClear}>Nhập lại</button>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px' }}>
        <p><strong>Nhập thông tin người dùng</strong></p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
          <br />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
          <br />

          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
            min={1}
          />
          {errors.age && <p style={errorStyle}>{errors.age}</p>}
          <br /><br />

          <button type="submit">Gửi</button>{' '}
          <button type="button" onClick={this.handleClear}>
            Xóa tất cả
          </button>
        </form>
      </div>
    );
  }
}
