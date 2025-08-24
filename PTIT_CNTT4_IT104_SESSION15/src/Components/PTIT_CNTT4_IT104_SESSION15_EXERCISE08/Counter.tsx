import React, { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  private timerID?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount: Bắt đầu setInterval");
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }


  componentWillUnmount() {
    console.log("componentWillUnmount: Clear interval");
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % 11 
    }));
  }


  componentDidUpdate(prevProps: {}, prevState: CounterState) {
    if (prevState.count !== this.state.count) {
      console.log(`componentDidUpdate: count = ${this.state.count}`);
    }
  }

  render() {
    console.log("render()");
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Bộ đếm</h2>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default Counter;
