    import React from "react";
import { Student } from "../../types/student";
import { StudentStatus } from "./StudentStatus";
import { StudentActions } from "./StudentActions";

type Props = {
  student: Student;
  index: number;
};

export class StudentRow extends React.Component<Props> {
  render() {
    const { student, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{student.code}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.email}</td>
        <td><StudentStatus status={student.status} /></td>
        <td><StudentActions /></td>
      </tr>
    );
  }
}
