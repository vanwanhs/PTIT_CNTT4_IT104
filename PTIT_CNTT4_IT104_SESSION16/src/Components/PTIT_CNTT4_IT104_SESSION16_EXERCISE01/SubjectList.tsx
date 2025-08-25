// import React, { Component } from 'react';

// type State = {
//   subjects: string[];
// };

// export default class SubjectList extends Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       subjects: ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh']
//     };
//   }

//   render() {
//     const { subjects } = this.state;

//     return (
//       <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//         <h2>Danh sách môn học</h2>
//         <ul>
//           {subjects.map((subject, index) => (
//             <li key={index}>{subject}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react'
type State = {
    listSubject :string[]
}
export default class SubjectList extends Component <{},State> {
    constructor(props:{}){
        super(props);
        this.state = {
            listSubject : ["Toán", "Văn", "Anh"]
        }
    }
  render() {
    const {listSubject} = this.state;
    return (
      <div>
        {listSubject.map((subject,index)=>
            <p key={index}>{subject}</p>
        )}
      </div>
    )
  }
}
