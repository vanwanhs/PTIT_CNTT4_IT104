import React from "react";

export class StudentActions extends React.Component {
  render() {
    return (
      <div>
        <button style={{ background: "#ddd", margin: "0 3px" }}>Chặn</button>
        <button style={{ background: "#ffc107", margin: "0 3px" }}>Sửa</button>
        <button style={{ background: "#f5222d", color: "white", margin: "0 3px" }}>Xóa</button>
      </div>
    );
  }
}
