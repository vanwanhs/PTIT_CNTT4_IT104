import React, { useRef, useState } from 'react'

export default function Ex2() {
    const [inputValue,setInputValue] = useState('');
    const ref = useRef(0);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
        ref.current++;
    }
  return (
    <div>
      <input type="text" 
      value={inputValue}
      onChange={handleChange}
      placeholder='Nhap'
      />
      <p>Componet da render: {ref.current}</p>
    </div>
  )
}
