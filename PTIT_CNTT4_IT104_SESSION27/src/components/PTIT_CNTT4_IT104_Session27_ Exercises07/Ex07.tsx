
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './About';
import About from './Home';
import NotFound from './NotFound';
export default function Ex07() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

