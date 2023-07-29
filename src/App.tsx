import { FC } from 'react';
import Menu from './components/menu/index';
import Title from './components/title/index';
import Logos from './components/logos/index';
import Courses from './components/courses/index';
import HowToStart from './components/how-to-start/index';
import Traders from './components/traders/index';
import './App.scss';

const App: FC = () => {
  return (
    <>
      <Menu />
      <Title />
      <Logos />
      <Courses />
      <HowToStart />
      <Traders />
    </>
  );
};

export default App;
