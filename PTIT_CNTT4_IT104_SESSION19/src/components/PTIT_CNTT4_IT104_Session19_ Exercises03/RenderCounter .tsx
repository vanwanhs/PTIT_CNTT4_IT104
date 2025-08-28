import React, { useRef, useState, useEffect } from 'react';

export default function RenderCounter() {
  const [value, setValue] = useState('');
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Render Counter</h2>

      <input
        type="text"
        value={value}
        placeholder="Nhập gì đó..."
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '300px',
          marginBottom: '20px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <p style={{ fontSize: '18px' }}>
        Số lần component đã render: <strong>{renderCount.current}</strong>
      </p>
    </div>
  );
}
