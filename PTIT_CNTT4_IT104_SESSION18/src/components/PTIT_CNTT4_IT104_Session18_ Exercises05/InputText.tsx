import React, { useReducer } from 'react';


const inputReducer = (state: string, action: { type: string; payload?: string }) => {
  switch (action.type) {
    case 'SET_TEXT':
      return action.payload || '';
    default:
      return state;
  }
};

export default function InputText() {

  const [text, dispatch] = useReducer(inputReducer, '');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Nhập chuỗi và hiển thị</h2>
      <input
        type="text"
        placeholder="Nhập gì đó..."
        onChange={handleChange}
        value={text}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <p style={{ marginTop: '1rem' }}>
        <strong>Chuỗi đã nhập:</strong> {text}
      </p>
    </div>
  );
}
