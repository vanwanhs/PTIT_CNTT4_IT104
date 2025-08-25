import React, { Component } from 'react';

type State = {
  color: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: true,
    };
  }

  handleChange = () => {
    this.setState((prevState) => ({
      color: !prevState.color,
    }));
  };

  render() {
    const { color } = this.state;

    const containerStyle = {
      backgroundColor: color ? '#222' : '#fff',
      color: color ? '#fff' : '#000',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
    };

    return (
      <div style={containerStyle}>
        <h2>{color ? '🌙 Chế độ tối' : '🌞 Chế độ sáng'}</h2>
        <button onClick={this.handleChange}>
          {color ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
        </button>
      </div>
    );
  }
}
