import React, { useState, useCallback } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#000000'); 


  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2> Bộ chọn màu (Color Picker)</h2>

      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        style={{ width: '100px', height: '50px', border: 'none', cursor: 'pointer' }}
      />

      <div style={{ marginTop: '1rem' }}>
        <p>Màu đã chọn: <strong>{color}</strong></p>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            margin: '0 auto',
            border: '1px solid #ccc'
          }}
        ></div>
      </div>
    </div>
  );
}
