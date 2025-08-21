import React, { Component } from 'react';

type InitialState = {
  name: string;
};

export default class LifeCycle extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Nguyễn Văn Ánh',
    };
  }

  componentDidMount(): void {
    console.log('Anh yêu em');
  }

  changeName = () => {
    this.setState({ name: 'Hành Lá' });
  };
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<InitialState>, nextContext: any): boolean {
      console.log("CHạy");
      return true
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<InitialState>, snapshot?: any): void {
      console.log("Không up date");
  }
  componentWillUnmount(): void {
      console.log("tiếp tục chạy");
      
  }
  render() {
    return (
      <div>
        <p>Tên sinh viên: {this.state.name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
