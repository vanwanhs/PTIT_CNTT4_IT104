import { createSlice} from '@reduxjs/toolkit';
import type { Student } from '../../utils/types';

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    {
        id:1,
        name:"Spring  Onion"
    }
  ]
};

const userSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state:Student, action) => {
      state.students.push(action.payload);
    }
     deleteStudent: (state, action) => {
    state.students = state.students.filter(student => student.id !== action.payload);
  }
  }
});

export const { addStudent } = userSlice.actions;
export default userSlice.reducer;
