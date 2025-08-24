import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ModalConfirm from './ModalConfirm';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [deleteTodo, setDeleteTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) setTodos(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (name: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEdit = (id: number) => {
    setEditId(id);
  };

  const handleUpdate = (id: number, name: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, name } : todo
    ));
    setEditId(null);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setDeleteTodo(null);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Danh sách công việc</h2>
      <TodoInput onAdd={handleAdd} todos={todos.map(t => t.name)} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onUpdate={handleUpdate}
        onDelete={(id) => {
          const task = todos.find(t => t.id === id);
          if (task) setDeleteTodo(task);
        }}
        editId={editId}
      />
      <p><b>Công việc đã hoàn thành:</b> {todos.filter(t => t.completed).length} / {todos.length}</p>

      {deleteTodo && (
        <ModalConfirm
          task={deleteTodo}
          onCancel={() => setDeleteTodo(null)}
          onConfirm={() => handleDelete(deleteTodo.id)}
        />
      )}
    </div>
  );
}
