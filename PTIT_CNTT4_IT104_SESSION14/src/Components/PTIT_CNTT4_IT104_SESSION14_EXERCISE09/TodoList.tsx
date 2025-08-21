import React, { useState } from 'react';
import { Todo } from './TodoApp';

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
  onUpdate: (id: number, name: string) => void;
  onDelete: (id: number) => void;
  editId: number | null;
};

export default function TodoList({
  todos,
  onToggle,
  onEdit,
  onUpdate,
  onDelete,
  editId,
}: Props) {
  const [editValue, setEditValue] = useState('');

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editValue || todo.name}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => onUpdate(todo.id, editValue || todo.name)}>Lưu</button>
            </>
          ) : (
            <>
              <span style={{ flex: 1 }}>{todo.name}</span>
              <button onClick={() => {
                onEdit(todo.id);
                setEditValue(todo.name);
              }}>✏️</button>
            </>
          )}
          <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}
