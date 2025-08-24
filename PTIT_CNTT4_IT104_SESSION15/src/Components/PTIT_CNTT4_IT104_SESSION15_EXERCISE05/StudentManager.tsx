import React, { Component } from "react";
import { Student } from "../../types/student";
import { StudentTable } from "./StudentTable";
import { StudentFilter } from "./StudentFilter";
import { StudentPagination } from "./StudentPagination";

type State = {
  students: Student[];
};

export class StudentManager extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          code: "SV001",
          name: "Nguyễn Văn A",
          dob: "2023-12-21",
          email: "nva@gmail.com",
          status: true,
        },
        {
          id: 2,
          code: "SV002",
          name: "Nguyễn Thị B",
          dob: "2022-11-21",
          email: "ntb@gmail.com",
          status: false,
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Quản lý sinh viên</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <StudentFilter />
          <button style={{ padding: "8px 12px", background: "#1677ff", color: "white", border: "none", borderRadius: "5px" }}>
            Thêm mới sinh viên
          </button>
        </div>
        <StudentTable students={this.state.students} />
        <StudentPagination />
      </div>
    );
  }
}
