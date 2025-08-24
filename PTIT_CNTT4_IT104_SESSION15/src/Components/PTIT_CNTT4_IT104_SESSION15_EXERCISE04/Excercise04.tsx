import React, { Component, ChangeEvent, FormEvent } from 'react';

type State = {
  progress: number;
  submitted: number;
};

export default class Exercise04 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: 0,
      submitted: -1
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: parseInt(e.target.value) });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.progress });
  };

  render() {
    const { progress, submitted } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h2>Kiểm tra tiến độ hoàn thành</h2>
        
        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={progress}
            onChange={this.handleChange}
          />
          <span style={{ marginLeft: '10px' }}>{progress}%</span>
          <br /><br />
          <button type="submit">Xác nhận</button>
        </form>

        {submitted >= 0 && (
          <p style={{ marginTop: '20px' }}>
            ✅ Tiến độ bạn đã hoàn thành: <strong>{submitted}%</strong>
          </p>
        )}
      </div>
    );
  }
}
