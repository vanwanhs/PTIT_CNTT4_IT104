import React, { Component } from 'react';

type ButtonItem = {
  color: string;
  label: string;
};

type State = {
  buttons: ButtonItem[];
};

export default class ButtonList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      buttons: [
        { color: 'blue', label: 'Primary' },
        { color: 'gray', label: 'Secondary' },
        { color: 'green', label: 'Success' },
        {color:  'yellow', label: 'Warning'},
        { color: 'red', label: 'Danger' },
        {color:'white',label:'Light'},
        {color:'black',label:"Dark"}
      ]
    };
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.state.buttons.map((btn,index)=>
        <button
            key={index}
            style={{
                color:'dark',
                marginRight: '5px',
                background:btn.color
            }}
        >
            {btn.label}
        </button>
        )}
      </div>
    );
  }
}
