import React, { useEffect, useState } from 'react';
import ModalConfirm from './ModalConfirm';
import './ToDoList.css';

type Task = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export default function ToDoList() {
  const [taskName, setTaskName] = useState('');
  const [taskList, setTaskList] = useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem('taskList') || '[]');
  });
  const [error, setError] = useState('');
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const handleAdd = () => {
    const name = taskName.trim();
    if (!name) {
      setError('Tên công việc không được để trống');
      return;
    }
    if (taskList.some(t => t.name === name)) {
      setError('Tên công việc đã tồn tại');
      return;
    }

    const newTask: Task = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      name,
      isCompleted: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskName('');
    setError('');
  };

  const toggleComplete = (id: number) => {
    setTaskList(taskList.map(t =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    ));
  };

  const openDeleteModal = (task: Task) => {
    setTaskToDelete(task);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      setTaskList(taskList.filter(t => t.id !== taskToDelete.id));
      setTaskToDelete(null);
    }
  };

  const cancelDelete = () => {
    setTaskToDelete(null);
  };

  const completedCount = taskList.filter(t => t.isCompleted).length;

  return (
    <div className="container">
      <h2>Danh sách công việc</h2>
      <div className="input-line">
        <input
          type="text"
          value={taskName}
          placeholder="Nhập tên công việc"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>
      {error && <p className="error">{error}</p>}

      <ul className="task-list">
        {taskList.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            />
            <span className={task.isCompleted ? 'done' : ''}>{task.name}</span>
            <button className="delete-btn" onClick={() => openDeleteModal(task)}>🗑️</button>
          </li>
        ))}
      </ul>

      <p className="footer">
        Công việc đã hoàn thành: {completedCount} / {taskList.length}
      </p>

      {taskToDelete && (
        <ModalConfirm
          taskName={taskToDelete.name}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}
