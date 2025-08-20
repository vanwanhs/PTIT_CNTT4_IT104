import React, { Component } from "react";

type State = {
  data: string;
};

export class Input extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      data: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Dữ liệu: {this.state.data}</h2>
        <input
          type="text"
          placeholder="Nhập dữ liệu..."
          value={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
