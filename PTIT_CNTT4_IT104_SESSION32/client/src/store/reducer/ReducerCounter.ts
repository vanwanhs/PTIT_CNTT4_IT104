// src/store/reducer/ReducerCounter.ts

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const reducerCount = (state = initialState, action: any): State => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default reducerCount;
