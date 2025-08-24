import React, { Component, ChangeEvent, FormEvent } from 'react';

type State = {
  color: string;
  submittedColor: string;
};

export default class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: '',
      submittedColor: ''
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.color.trim()) {
      this.setState({ submittedColor: this.state.color.trim() });
    }
  };

  render() {
    const { color, submittedColor } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Nhập mã màu sắc</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={this.handleChange}
            placeholder="Ví dụ: red, #ff0000, blue..."
            style={{ padding: '8px', marginRight: '10px', width: '250px' }}
          />
          <button type="submit" style={{ padding: '8px 12px' }}>Hiển thị</button>
        </form>

        {submittedColor && (
          <div style={{ marginTop: '20px' }}>
            <p>Mã màu bạn nhập là: <strong>{submittedColor}</strong></p>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: submittedColor,
                border: '1px solid #ccc',
                marginTop: '10px'
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
// import React, { Component } from 'react'
// type State = {
//     color:string,
//     submittedColor:string
// }
// export default class Exercise02 extends Component<{},State> {
//     constructor(props:{}){
//         super(props);
//         this.state = {
//             color:'',
//             submittedColor:''
//         }
//     }

//   render() {
//     const {color,submittedColor} = this.state;
//     return (

//       <div>
//         <h1>Nhập mã màu sắc</h1>
//         <form onSubmit={this.handleSubmit}>
//             <input type="text" 
//             placeholder='mời bạn nhập mã màu'
            
            
//             />

//         </form>
//       </div>
//     )
//   }
// }

