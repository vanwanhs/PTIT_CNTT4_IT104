import React from 'react';
import { Todo } from './TodoApp';

type Props = {
  task: Todo;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ModalConfirm({ task, onCancel, onConfirm }: Props) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: '#00000080',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ background: 'white', padding: 20, borderRadius: 8 }}>
        <h4>Xác nhận</h4>
        <p>Bạn có chắc muốn xóa công việc <b>{task.name}</b> không?</p>
        <button onClick={onCancel} style={{ marginRight: 10 }}>Hủy</button>
        <button onClick={onConfirm}>Đồng ý</button>
      </div>
    </div>
  );
}
