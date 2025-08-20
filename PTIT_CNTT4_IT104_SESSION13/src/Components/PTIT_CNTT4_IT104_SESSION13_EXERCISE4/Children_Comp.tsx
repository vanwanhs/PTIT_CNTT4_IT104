import React, { Component } from 'react';

type Props = {
  name: string;
};

export default class Children_Comp extends Component<Props> {
  render() {
    return (
      <div>
        <h2>Component Con</h2>
        <p>Họ và tên nhận từ cha: <strong>{this.props.name}</strong></p>
      </div>
    );
  }
}
