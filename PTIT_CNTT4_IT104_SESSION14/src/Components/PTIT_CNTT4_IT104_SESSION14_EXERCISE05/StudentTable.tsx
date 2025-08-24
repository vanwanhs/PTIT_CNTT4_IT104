import React from "react";
import { Student } from "../../types/student";
import { StudentRow } from "./StudentRow";

type Props = {
  students: Student[];
};

export class StudentTable extends React.Component<Props> {
  render() {
    return (
      <table style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#fff" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((student, index) => (
            <StudentRow key={student.id} student={student} index={index + 1} />
          ))}
        </tbody>
      </table>
    );
  }
}
