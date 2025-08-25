// import React, { Component } from 'react'
// import ThemeSwitcher from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE06/ThemeSwitcher'
// // import UserForm from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE05/UserForm'
// // import Button from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE03/Button'
// // import Exercise04 from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE04/Exercise04'
// // import SubjectList from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE01/SubjectList'
// // import LoginStatus from './Components/PTIT_CNTT4_IT104_SESSION16_EXERCISE02/LoginStatus'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <SubjectList></SubjectList> */}
//         {/* <LoginStatus></LoginStatus> */}
//         {/* <Button></Button> */}
//         {/* <Exercise04></Exercise04> */}
//         {/* <UserForm></UserForm> */}
//         <ThemeSwitcher></ThemeSwitcher>
//       </div>
//     )
//   }
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Page/ProductPage';
import CartPage from './Page/CartPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    );
  }
}