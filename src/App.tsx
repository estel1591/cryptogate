import React, { FC } from 'react';
import './App.scss';

const App: FC = () => {
  return (
    <div className="layout">
      <div className="menu">
        <div className="logo">CryptoGate</div>
        <a href="/" className="btn">
          get a course
        </a>
      </div>
    </div>
  );
};

export default App;
