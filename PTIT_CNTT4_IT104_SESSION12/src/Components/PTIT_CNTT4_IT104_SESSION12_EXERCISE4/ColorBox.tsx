import React from 'react';

export default function ColorBox() {
  const colors = ['red', 'blue', 'green'];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Danh sách khối màu</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {colors.map((color, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
            <div
              style={{
                backgroundColor: color,
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Box
            </div>
            <p
              style={{
                marginTop: '10px',
                border: '1px solid #ccc',
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              {color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
