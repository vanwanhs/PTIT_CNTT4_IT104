import React, { useReducer } from 'react'

export default function Increase() {
    const initialState = {
        count: 0,
    };
    const reducer = (state:typeof initialState, action:any) =>{
        console.log("action",action);
        switch(action.type){
            case 'Increase':
                return{
                    ...state,
                    count: state.count + action.payload,
                };
            default:
                return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const increase = () =>{
        dispatch({type:'INCREASE',payload:1});
    };
 return (
    <div>
      <h1>UseReducer</h1>
      <p>Giá trị của count: {state.count}</p>
      <button onClick={increase}>Click</button>
    </div>
  );
}
