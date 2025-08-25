import React, { Component } from 'react';

type State = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
   this.setState({ isLoggedIn: !this.state.isLoggedIn })
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Trạng thái đăng nhập</h2>

        <p>
          {isLoggedIn ? 'Xin chào, User!' : 'Vui lòng đăng nhập để tiếp tục.'}
        </p>

        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
        </button>
      </div>
    );
  }
}
