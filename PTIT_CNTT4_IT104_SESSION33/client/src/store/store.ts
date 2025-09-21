import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import type { CartState, CartItem } from "../store/reducer/reducerCart";
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
const savedCart = localStorage.getItem('cart');
const parsedCart = savedCart ? (JSON.parse(savedCart) as CartItem[]) : [];

export const initialState: CartState = {
  cart: parsedCart,
};