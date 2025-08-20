import React, { Component } from 'react';
type StateType = {
  name: string;
};

export default class Exercises01 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Nguyễn Văn Ánh'
    };
  }

  render() {
    return (
      <div style={{ padding: '20px', fontSize: '20px' }}>
        Họ và tên: <strong>{this.state.name}</strong>
      </div>
    );
  }
}
