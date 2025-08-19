import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

export default function AdminIndex() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ width: '200px' }}>
          <Menu />
        </div>
        <div style={{ flex: 1 }}>
          <Main />
        </div>
      </div>

      <Footer />
    </div>
  );
}
