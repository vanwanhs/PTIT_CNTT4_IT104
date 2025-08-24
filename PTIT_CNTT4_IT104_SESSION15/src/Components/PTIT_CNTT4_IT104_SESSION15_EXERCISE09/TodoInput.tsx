import React, { useState, useRef } from 'react';

type Props = {
  onAdd: (name: string) => void;
  todos: string[];
};

export default function TodoInput({ onAdd, todos }: Props) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Tên công việc không được để trống');
      return;
    }

    if (todos.includes(name.trim())) {
      setError('Tên công việc không được trùng');
      return;
    }

    onAdd(name.trim());
    setName('');
    setError('');
    inputRef.current?.focus();
  };

  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
      <div style={{ flexGrow: 1 }}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={name}
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: 5 }}
        />
        {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
      </div>
      <button onClick={handleSubmit}>Thêm</button>
    </div>
  );
}
