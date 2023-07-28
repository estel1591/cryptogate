import { FC } from 'react';
import Menu from './components/menu/index';
import Title from './components/title/index';
import Logos from './components/logos/index';
import './App.scss';

const App: FC = () => {
  return (
    <>
      <div className="firstScreen">
        <Menu />
        <Title />
        <Logos />
      </div>
      courses
    </>
  );
};

export default App;
