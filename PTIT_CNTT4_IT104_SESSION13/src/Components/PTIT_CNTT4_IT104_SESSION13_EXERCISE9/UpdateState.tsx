import React, { Component } from "react";

type State = {
  companyName: string;
};

export class UpdateState extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      companyName: "Rikkei Academy",
    };
  }

  handleChange = () => {
    this.setState({
      companyName: "Rikkei Soft",
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Tên công ty: {this.state.companyName}</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}
