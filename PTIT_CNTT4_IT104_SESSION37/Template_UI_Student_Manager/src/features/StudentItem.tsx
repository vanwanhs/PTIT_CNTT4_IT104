import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import React from 'react';
import type { Student } from '../utils/types';

interface Props {
  student: Student;
  onEdit: (s: Student) => void;
  onDelete: (id: string) => void;
}

const StudentItem: React.FC<Props> = ({ student, onEdit, onDelete }) => {
  return (
    <Card className="rounded-xl shadow-sm">
      <CardContent className="flex items-center justify-between">
        <div>
          <Typography variant="h6" className="font-medium">
            {student.name}
          </Typography>
          <Typography variant="body2" className="text-sm text-gray-500">
            Age: {student.age} • Grade: {student.grade}
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <IconButton size="small" onClick={() => onEdit(student)} aria-label="edit">
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => onDelete(student.id)}
            aria-label="delete"
          >
            <Delete fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentItem;