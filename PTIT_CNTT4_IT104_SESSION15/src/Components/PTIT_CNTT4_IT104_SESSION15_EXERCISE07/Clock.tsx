import React, { Component } from "react";

interface ClockState {
  time: Date;
}

class Clock extends Component<{}, ClockState> {
  private timerID?: number; 
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2> Đồng hồ hiện tại</h2>
        <h3>{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
