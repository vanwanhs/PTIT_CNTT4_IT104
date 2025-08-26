import React from 'react';
import './ModalConfirm.css';

type Props = {
  taskName: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ModalConfirm({ taskName, onConfirm, onCancel }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Xác nhận</h3>
        <p>Bạn có xác nhận xóa công việc &lt;<strong>{taskName}</strong>&gt; không?</p>
        <div className="modal-actions">
          <button onClick={onCancel}>Hủy</button>
          <button className="confirm" onClick={onConfirm}>Đồng ý</button>
        </div>
      </div>
    </div>
  );
}
