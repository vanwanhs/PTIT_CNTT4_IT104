import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';
import type { RootState } from '../store/store';

export default function Counter() {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Giá trị counter: {value}
      <button onClick={handleIncrement}>Tăng</button>
      <button onClick={handleDecrement}>Giảm</button>
    </div>
  );
}
