import React from "react";

type Props = {
  status: boolean;
};

export class StudentStatus extends React.Component<Props> {
  render() {
    return this.props.status ? (
      <span style={{ color: "green" }}>Đang hoạt động</span>
    ) : (
      <span style={{ color: "red" }}>Ngừng hoạt động</span>
    );
  }
}
