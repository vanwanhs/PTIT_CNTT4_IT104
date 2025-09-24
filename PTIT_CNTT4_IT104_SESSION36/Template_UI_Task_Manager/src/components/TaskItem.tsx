import { Checkbox, Chip, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import React from 'react';

const priorityColor = {
  low: 'success',
  medium: 'warning',
  high: 'error',
} as const;

const TaskItem: React.FC<any> = ({
  id,
  title,
  completed,
  priority,
  onToggle,
  onDelete,
  onEdit, // nhận prop onEdit từ App
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-2">
      <div className="flex items-center gap-3">
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <span className={`text-sm ${completed ? 'line-through text-gray-400' : ''}`}>
          {title}
        </span>
        <Chip
          label={priority.toUpperCase()}
          color={priorityColor[priority]}
          size="small"
          className="ml-2"
        />
      </div>
      <div className="flex gap-1">
        <IconButton onClick={() => onDelete(id)} color="error">
          <Delete />
        </IconButton>
        <IconButton color="primary" onClick={() => onEdit && onEdit()}>
          <Edit />
        </IconButton>
      </div>
    </div>
  );
};

export default TaskItem;
