import React, { Component } from 'react';

type InitialState = {
  id: number;
  name: string;
  birthday: string;
  address: string;
};

export default class Exercise02 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      name: 'Nguyễn Văn Ánh',
      birthday: '01/02/2000',
      address: 'Hà Nội'
    };
  }

  render() {
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Nơi sinh: {this.state.address}</p>
      </div>
    );
  }
}
