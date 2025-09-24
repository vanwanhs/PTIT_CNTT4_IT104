import FilterControls from './components/FilterControls';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const App = () => {
  // State tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Học Redux Toolkit', completed: false, priority: 'high' },
    { id: '2', title: 'Làm bài tập TS', completed: true, priority: 'medium' },
  ]);

  // State form đang chỉnh sửa
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // State filter
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: '',
  });

  // State loading giả lập
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Thêm task
  const handleAdd = (title: string, priority: 'low'|'medium'|'high') => {
    setTasks([...tasks, { id: Date.now().toString(), title, completed: false, priority }]);
  };

  // Mở form sửa
  const handleEdit = (task: Task) => setEditingTask(task);

  // Cập nhật task
  const handleUpdate = (id: string, title: string, priority: 'low'|'medium'|'high') => {
    setTasks(tasks.map(t => t.id === id ? {...t, title, priority} : t));
    setEditingTask(null);
  };

  // Toggle completed
  const handleToggle = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  };

  // Xóa task + modal
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const handleOpenDeleteModal = (id: string) => setTaskToDelete(id);
  const handleCloseDeleteModal = () => setTaskToDelete(null);
  const handleConfirmDelete = () => {
    if(taskToDelete){
      setTasks(tasks.filter(t => t.id !== taskToDelete));
      setTaskToDelete(null);
    }
  };

  // Filter task
  const filteredTasks = tasks.filter(t => {
    const matchStatus = filters.status === 'all' ||
      (filters.status === 'completed' && t.completed) ||
      (filters.status === 'active' && !t.completed);
    const matchPriority = filters.priority === 'all' || t.priority === filters.priority;
    const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());
    return matchStatus && matchPriority && matchSearch;
  });

  if(loading){
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <CircularProgress />
        <span className="mt-3 text-gray-600">Đang tải dữ liệu...</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

      {/* Form thêm / sửa task */}
      <TaskForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingTask={editingTask}
        existingTitles={tasks.map(t => t.title)}
      />

      {/* Filter */}
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={status => setFilters({...filters, status})}
        onPriorityChange={priority => setFilters({...filters, priority})}
        onSearchChange={search => setFilters({...filters, search})}
      />

      {/* List task */}
      <div className="mt-4">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={() => handleOpenDeleteModal(task.id)}
            onEdit={() => handleEdit(task)}
            onUpdate={handleUpdate}
            existingTitles={tasks.map(t => t.title)}
          />
        ))}
      </div>

      {/* Modal xác nhận xóa */}
      <DeleteConfirmModal
        open={taskToDelete !== null}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default App;
