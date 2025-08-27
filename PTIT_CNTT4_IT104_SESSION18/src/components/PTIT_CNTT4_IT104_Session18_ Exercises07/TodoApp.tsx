import React, { useReducer, useState } from 'react';


type Job = {
  id: number;
  name: string;
};


const getInitialJobs = (): Job[] => {
  const stored = localStorage.getItem('jobs');
  return stored ? JSON.parse(stored) : [];
};


const jobReducer = (state: Job[], action: { type: string; payload?: any }): Job[] => {
  switch (action.type) {
    case 'ADD':
      const newStateAdd = [...state, action.payload];
      localStorage.setItem('jobs', JSON.stringify(newStateAdd));
      return newStateAdd;

    case 'DELETE':
      const newStateDelete = state.filter(job => job.id !== action.payload);
      localStorage.setItem('jobs', JSON.stringify(newStateDelete));
      return newStateDelete;

    default:
      return state;
  }
};

export default function TodoApp() {
  const [jobs, dispatch] = useReducer(jobReducer, [], getInitialJobs);
  const [jobName, setJobName] = useState('');

  const handleAdd = () => {
    if (!jobName.trim()) return;

    const newJob: Job = {
      id: Date.now(),
      name: jobName.trim(),
    };

    dispatch({ type: 'ADD', payload: newJob });
    setJobName('');
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Bạn có chắc muốn xoá công việc này?');
    if (confirmDelete) {
      dispatch({ type: 'DELETE', payload: id });
    }
  };

  return (
    <div style={{ width: '400px', margin: '40px auto', fontFamily: 'Arial' }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={jobName}
        onChange={(e) => setJobName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd();
        }}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '10px',
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Thêm
      </button>

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {jobs.map((job) => (
          <li
            key={job.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <span>{job.name}</span>
            <button
              onClick={() => handleDelete(job.id)}
              style={{
                backgroundColor: '#e74c3c',
                color: '#fff',
                padding: '6px 12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
