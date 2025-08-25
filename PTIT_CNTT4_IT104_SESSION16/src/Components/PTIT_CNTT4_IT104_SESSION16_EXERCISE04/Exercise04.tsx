import React, { Component } from 'react'
type State = {
    count : number
}
export default class Exercise04 extends Component<{},State> {
    constructor(props:{}){
        super(props);
        this.state = {
            count : 0
        }
    }
    ClickCounter = () => {
        this.setState({count:this.state.count+1})
    }
  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={this.ClickCounter} >Click me</button>
        <p>Số lần bạn đã click: {count}</p>
      </div>
    )
  }
}
