import React, { useReducer } from 'react';

export default function UseReducerComponent() {
  // Khởi tạo state ban đầu
  const initialState = {
    count: 0,
  };

  //  Khai báo reducer đúng cú pháp
  const reducer = (state: typeof initialState, action: any) => {
    console.log("action", action);
    switch (action.type) {
      case 'INCREASE':
        return {
          ...state,
          count: state.count + action.payload, // Có thể cộng thêm payload
        };
      default:
        return state;
    }
  };

  //  Dùng useReducer đúng hàm reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // hàm tăng
  const increase = () => {
    dispatch({ type: 'INCREASE', payload: 5 });
  };

  return (
    <div>
      <h1>UseReducer</h1>
      <p>Giá trị của count: {state.count}</p>
      <button onClick={increase}>Click</button>
    </div>
  );
}
