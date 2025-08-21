import React, { Component } from 'react';

type State = {
  gender: string;
  submittedGender: string;
};

export default class Exercise06 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: '',
      submittedGender: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    this.setState({ submittedGender: this.state.gender });
  };

  render() {
    const { gender, submittedGender } = this.state;

    return (
      <div>
        <h2>Chọn giới tính</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={gender === 'Nam'}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={gender === 'Nữ'}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={gender === 'Khác'}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br /><br />

          <button type="submit">Submit</button>
        </form>

        {submittedGender && (
          <p>Giới tính bạn chọn là: <strong>{submittedGender}</strong></p>
        )}
      </div>
    );
  }
}
