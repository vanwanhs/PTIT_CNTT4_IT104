// import React from 'react'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Notfound from './pages/Notfound'
// import Admin from './Layout/Admin'
// import UserManager from './pages/UserManager'
// import ProductManager from './pages/ProductManager'
// import Order from './pages/Order'
// import Login from './pages/Login'
// import './app.css'
// import ProductDelital from './pages/ProductDelital'
// export default function App() {
//   const routers = createBrowserRouter([
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
//     children: [
//       {
//         path: "user",
//         element: <UserManager />
//       },
//       {
//         path: "product",
//         element: <ProductManager />
//       },
//       {
//         path: "order",
//         element: <Order />
//       },
//       {
//         path:"product/:id",
//         element:<ProductDelital></ProductDelital>
//       }
//     ]
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "*",
//     element: <Notfound />
//   }
// ]);

//   return (
//     <div>
//       Như ngày hôm qua
//       <RouterProvider router = {routers}></RouterProvider>
//     </div>
//   )
// }
import React from 'react'
// import Ex09 from './components/PTIT_CNTT4_IT104_Session25_ Exercises09/Ex09'
import Ex10 from './components/PTIT_CNTT4_IT104_Session25_ Exercises10/Ex10'
// import Ex07 from './components/PTIT_CNTT4_IT104_Session25_ Exercises07/Ex07'
// import Ex08 from './components/PTIT_CNTT4_IT104_Session25_ Exercises08/Ex08'
// import Ex04 from './components/PTIT_CNTT4_IT104_Session25_ Exercises04/Ex04'
// import Ex06 from './components/PTIT_CNTT4_IT104_Session25_ Exercises06/Ex06'
// import Ex03 from './components/PTIT_CNTT4_IT104_Session25_ Exercises03/Ex03'
// import Ex01 from './components/PTIT_CNTT4_IT104_Session25_ Exercises01/Ex01'
// import Ex02 from './components/PTIT_CNTT4_IT104_Session25_ Exercises02/Ex02'

export default function App() {
  return (
    <div>
      {/* <Ex01></Ex01> */}
      {/* <Ex02></Ex02> */}
      {/* <Ex03 ></Ex03> */}
      {/* <Ex04></Ex04> */}
      {/* <Ex06></Ex06> */}
      {/* <Ex07></Ex07> */}
      {/* <Ex08></Ex08> */}
      {/* <Ex09></Ex09> */}
      <Ex10></Ex10>
    </div>
  )
}
