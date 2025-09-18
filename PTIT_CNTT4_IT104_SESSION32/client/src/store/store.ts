// src/store/store.ts

import { createStore } from "redux";
import reducerCount from "./reducer/ReducerCounter";

export const store = createStore(reducerCount);
