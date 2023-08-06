import { FC } from 'react';
import Menu from './components/menu/index';
import Title from './components/title/index';
import Logos from './components/logos/index';
import Courses from './components/courses/index';
import HowToStart from './components/how-to-start/index';
import Traders from './components/traders/index';
import CoursesDeatils from './components/courses-details/index';
import BringToWorld from './components/bring-to-world/index';
import Carousel from './components/carousel/index';
import QA from './components/qa/index';
import Form from './components/form/index';
import Footer from './components/footer/index';
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
      <Carousel />
      <QA />
      <Form />
      <Footer />
    </>
  );
};

export default App;
