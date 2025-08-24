import React, { Component, ChangeEvent, FormEvent } from 'react';

type State = {
  birthday: string;
  submitted: string;
};

export default class Excercise03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      birthday: '',
      submitted: ''
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.birthday });
  };

  render() {
    const { birthday, submitted } = this.state;
    return (
      <div>
        <h1>Ngày sinh:</h1>
        {submitted && (
          <p>Ngày sinh bạn chọn: <strong>{submitted}</strong></p>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            value={birthday}
            onChange={this.handleChange}
            style={{ padding: '5px', marginRight: '10px' }}
          />
          <button type="submit">Xác nhận</button>
        </form>
      </div>
    );
  }
}
