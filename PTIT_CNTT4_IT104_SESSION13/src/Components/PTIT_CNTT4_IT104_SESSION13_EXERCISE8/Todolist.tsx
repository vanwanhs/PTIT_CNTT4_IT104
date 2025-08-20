import React, { Component } from 'react';

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type State = {
  tasks: Task[];
  editingTaskId: number | null;
  editedName: string;
  editedAssign: string;
};

export default class Todolist extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Làm bài tập React',
          assign: 'Nguyễn Văn Ánh',
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: 'Ôn lại TypeScript',
          assign: 'Nguyễn Văn Ánh',
          status: true,
          created_at: new Date(),
        }
      ],
      editingTaskId: null,
      editedName: '',
      editedAssign: '',
    };
  }

  formatDate = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleString('vi-VN');
  };

  formatStatus = (status: boolean) => {
    return status ? ' Đã hoàn thành' : ' Chưa hoàn thành';
  };

  handleDelete = (id: number) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  handleEdit = (task: Task) => {
    this.setState({
      editingTaskId: task.id,
      editedName: task.name,
      editedAssign: task.assign,
    });
  };

  handleSave = (id: number) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          name: this.state.editedName,
          assign: this.state.editedAssign,
        };
      }
      return task;
    });

    this.setState({
      tasks: newTasks,
      editingTaskId: null,
      editedName: '',
      editedAssign: '',
    });
  };

  handleCancel = () => {
    this.setState({
      editingTaskId: null,
      editedName: '',
      editedAssign: '',
    });
  };

  render() {
    return (
      <div style={{ padding: '30px' }}>
        <h2> Danh sách công việc</h2>
        <table style={{
          borderCollapse: 'collapse',
          width: '100%',
          textAlign: 'left',
          backgroundColor: '#f9f9f9'
        }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>ID</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Tên công việc</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Giao cho</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Trạng thái</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Ngày tạo</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr key={task.id}>
                <td style={{ padding: '10px' }}>{task.id}</td>
                <td style={{ padding: '10px' }}>
                  {this.state.editingTaskId === task.id ? (
                    <input
                      value={this.state.editedName}
                      onChange={(e) => this.setState({ editedName: e.target.value })}
                    />
                  ) : (
                    task.name
                  )}
                </td>
                <td style={{ padding: '10px' }}>
                  {this.state.editingTaskId === task.id ? (
                    <input
                      value={this.state.editedAssign}
                      onChange={(e) => this.setState({ editedAssign: e.target.value })}
                    />
                  ) : (
                    task.assign
                  )}
                </td>
                <td style={{ padding: '10px' }}>{this.formatStatus(task.status)}</td>
                <td style={{ padding: '10px' }}>{this.formatDate(task.created_at)}</td>
                <td style={{ padding: '10px' }}>
                  {this.state.editingTaskId === task.id ? (
                    <>
                      <button onClick={() => this.handleSave(task.id)}>Lưu</button>
                      <button onClick={this.handleCancel} style={{ marginLeft: '5px' }}>Hủy</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => this.handleEdit(task)}>Sửa</button>
                      <button onClick={() => this.handleDelete(task.id)} style={{ marginLeft: '5px' }}>Xóa</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
