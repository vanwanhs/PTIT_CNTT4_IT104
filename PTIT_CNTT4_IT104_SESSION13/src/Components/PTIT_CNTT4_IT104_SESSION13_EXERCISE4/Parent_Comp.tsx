import React, { Component } from 'react';
import Children_Comp from './Children_Comp';

type StateType = {
  name: string;
};

export default class Parent_Comp extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: 'Nguyễn Văn Ánh'
    };
  }

  render() {
    return (
      <div>
        <h1>Component Cha</h1>
        Họ và tên từ bên cha: <strong>{this.state.name}</strong>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
