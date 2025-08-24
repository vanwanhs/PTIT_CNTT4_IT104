import React from "react";

export class StudentPagination extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "15px" }}>
        <button>{"<"}</button>
        <button style={{ background: "#1677ff", color: "white" }}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>{">"}</button>
      </div>
    );
  }
}
