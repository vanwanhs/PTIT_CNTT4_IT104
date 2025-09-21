import { combineReducers } from "redux";
import { reducerCart } from "./reducerCart";

// Có thể import thêm reducer khác sau này, ví dụ:
// import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  cart: reducerCart,
  // auth: authReducer, // nếu có
});

export default rootReducer;
