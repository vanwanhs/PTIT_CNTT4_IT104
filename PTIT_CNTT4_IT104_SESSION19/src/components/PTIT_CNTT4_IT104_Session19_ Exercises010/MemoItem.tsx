import React from 'react';

type MemoItemProps = {
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
};

const MemoItem = ({ index, selected, onSelect }: MemoItemProps) => {
  console.log(`Rendering item ${index}`);

  return (
    <div
      style={{
        padding: '10px',
        marginBottom: '4px',
        backgroundColor: selected ? '#f1c40f' : '#ecf0f1',
        border: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>Item #{index}</span>
      <button onClick={() => onSelect(index)}>Chọn</button>
    </div>
  );
};

export default React.memo(MemoItem);
