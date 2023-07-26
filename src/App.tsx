import React, { FC } from 'react';
import Menu from './components/menu/index';
import Title from './components/title/index';
import './App.scss';

const App: FC = () => {
  return (
    <div className="layout">
      <Menu />
      <Title />
    </div>
  );
};

export default App;
