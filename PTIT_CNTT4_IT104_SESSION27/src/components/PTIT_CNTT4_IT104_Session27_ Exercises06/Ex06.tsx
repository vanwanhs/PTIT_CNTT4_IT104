import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Detail from './Detail';
export default function Ex06() {
   return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}
