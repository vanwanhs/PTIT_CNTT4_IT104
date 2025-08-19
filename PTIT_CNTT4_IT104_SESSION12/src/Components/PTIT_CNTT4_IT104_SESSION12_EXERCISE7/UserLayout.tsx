import React from 'react'
import Header from './Header';
import Menu from './Menu';
import Navigation from './Navigation';
import Main from './Main';
import Article from './Article';

export default function UserLayout() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Header />
      <Navigation />
      <div style={{ display: 'flex', height: 'calc(100vh - 100px)' }}>
        <div style={{ width: '150px' }}>
          <Menu />
        </div>
        <div style={{ flex: 1 }}>
          <Main />
        </div>
        <div style={{ width: '150px' }}>
          <Article />
        </div>
      </div>
    </div>
  );
}

