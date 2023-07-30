import { FC } from 'react';
import Menu from './components/menu/index';
import Title from './components/title/index';
import Logos from './components/logos/index';
import Courses from './components/courses/index';
import HowToStart from './components/how-to-start/index';
import Traders from './components/traders/index';
import CoursesDeatils from './components/courses-details/index';
import BringToWorld from './components/bring-to-world/index';
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
      <CoursesDeatils />
      <BringToWorld />
      {/* https://www.npmjs.com/package/react-responsive-carousel
      https://turbofuture.com/computers/React-Image-Carousel */}
    </>
  );
};

export default App;
