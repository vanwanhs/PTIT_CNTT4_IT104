import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { Student } from '../utils/types';
import { addStudent, deleteStudent } from '../store/slices/userSlice';

export default function StudentManager() {
  const dispatch = useDispatch();

  const result = useSelector((data: any) => {
    return data.students.students;
  });

  const [user, setUser] = useState<Student>({
    id: Math.floor(Math.random() * 1000000),
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      name: e.target.value
    });
  };

  const handleAddStudent = () => {
    dispatch(addStudent(user));
    setUser({
      id: Math.floor(Math.random() * 1000000),
      name: ''
    });
  };

  const handleDeleteStudent = (id: number) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <input type="text" value={user.name} onChange={handleChange} />
      <button onClick={handleAddStudent}>Thêm</button>

      <ul>
        {result.map((item: Student, index: number) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDeleteStudent(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
