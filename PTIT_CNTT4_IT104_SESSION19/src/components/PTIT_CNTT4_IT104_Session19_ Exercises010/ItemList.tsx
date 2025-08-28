import React, { useState } from 'react';
import MemoItem from './MemoItem';

export default function ItemList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const items = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Danh sách Item (React.memo)</h2>
      {items.map((index) => (
        <MemoItem
          key={index}
          index={index}
          selected={index === selectedIndex}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
