import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { store } from "./component/PTIT_CNTT4_IT104_Session32_ Exercises04/store/store";
// import { store } from "./component/PTIT_CNTT4_IT104_Session32_ Exercises05/store/store";
// import { store } from "./component/PTIT_CNTT4_IT104_Session32_ Exercises06/store/store";
 import { store } from "./component/PTIT_CNTT4_IT104_Session32_ Exercises0708/store/store";
// import { store } from "./component/PTIT_CNTT4_IT104_Session32_ Exercises08/store/store";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
