import React, { useReducer } from 'react';

// 1. Định nghĩa reducer
const genderReducer = (state: string, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'SET_GENDER':
      return action.payload;
    default:
      return state;
  }
};

export default function InputRadio() {
  // 2. Khởi tạo state với giá trị mặc định là "Nam"
  const [gender, dispatch] = useReducer(genderReducer, 'Nam');

  // 3. Xử lý khi người dùng chọn giới tính mới
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_GENDER', payload: e.target.value });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Chọn giới tính</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === 'Nam'}
          onChange={handleChange}
        />
        Nam
      </label>

      <label style={{ marginLeft: '1rem' }}>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={gender === 'Nữ'}
          onChange={handleChange}
        />
        Nữ
      </label>

      <p style={{ marginTop: '1rem' }}>
        Giới tính bạn chọn là: <strong>{gender}</strong>
      </p>
    </div>
  );
}
