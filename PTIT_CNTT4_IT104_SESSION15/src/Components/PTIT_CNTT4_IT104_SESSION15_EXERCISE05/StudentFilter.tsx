import React from "react";

export class StudentFilter extends React.Component {
  render() {
    return (
      <div>
        <select style={{ padding: "5px", marginRight: "10px" }}>
          <option>Sắp xếp theo tuổi</option>
        </select>
        <input type="text" placeholder="Tìm kiếm theo tên hoặc email" style={{ padding: "5px" }} />
      </div>
    );
  }
}
