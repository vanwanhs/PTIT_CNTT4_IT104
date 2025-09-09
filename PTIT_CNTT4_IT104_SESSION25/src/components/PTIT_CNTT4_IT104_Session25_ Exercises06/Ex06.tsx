import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../PTIT_CNTT4_IT104_Session25_ Exercises01/Home'
import Detail from './Detail'
import Product from './Product'
import Header from './Header'
import './Header.css'

export default function Ex06() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
