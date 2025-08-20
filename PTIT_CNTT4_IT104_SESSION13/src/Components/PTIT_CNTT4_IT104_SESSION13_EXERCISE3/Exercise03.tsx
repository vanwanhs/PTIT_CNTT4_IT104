import React, { Component } from 'react'
type User = {
    id:number,
    name:string,
    address: string,
};
type StateType = {
    user: User[];
}
export default class Exercise03 extends Component<{},StateType> {
    constructor(props:{}){
        super(props);
        this.state = {
            user:[
                {id:1,name:"Hành Lá",address:"Hà Nội"},
                {id:2, name:"Hikari",address:"Hà Nam"},
                {id:3, name:"Kawa",address:"Hà Giang"}
            ]
        };
    }
  render() {
    return (
      <div>
        <h1>Danh sách người dùng</h1>
        {this.state.user.map(user => (
            <p key={user.id}>
              <strong>{user.id}</strong> - {user.name} - {user.address}
            </p>
          ))}
      </div>
    )
  }
}
