import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
export default function Ex04() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/task/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </div>
  )
}

