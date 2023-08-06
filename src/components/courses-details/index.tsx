import { FC } from 'react';
import CourseBlock from '../shared/course-block';
import { ReactComponent as StoneFifth } from '../../icons/stone5.svg';
import { ReactComponent as StoneSixth } from '../../icons/stone6.svg';
import './index.scss';

const propsForFirstCourse = {
  particular: {
    module: '5',
    duration: '4',
    lesson: '20',
    lessonTime: '1-2',
    students: '12,058',
    type: 'beginners',
  },
  icon: <StoneFifth />,
  price: '59$',
  children:
    'Learn from scratch about blockchain, Bitcoin, Ethereum, mining, bubble/boom, and how to make a profit trading cryptocurrency through this online course.',
  title: 'Cryptocurrency as a digital asset',
  courseNumber: '1',
  contentFirstTab: (
    <>
      <p>At the end of this course, you will learn:</p>
      <br />
      <ul>
        <li>Learn how to conduct a cryptocurrency assessment</li>
        <li>Learn how to use crypto trading platforms</li>
        <li>Learn how to conduct a technical analysis</li>
        <li>Learn how to implement various investment strategies</li>
        <li>Learn how to mitigate risk through risk management techniques</li>
      </ul>
    </>
  ),
};

const propsForSecondCourse = {
  particular: {
    module: '4',
    duration: '6',
    lesson: '25',
    lessonTime: '1-2',
    students: '4,896',
    type: 'advanced',
  },
  icon: <StoneSixth />,
  price: '99$',
  children:
    'This digital asset investment course is a guide to understanding the nature of crypto investing. We look at the basic principles and strategies commonly used by various participants in the digital financial world.',
  title: 'Investing in digital assets',
  courseNumber: '2',
  contentFirstTab: (
    <>
      <p>At the end of this course, you will learn:</p>
      <br />
      <ul>
        <li>The basics of basic cryptocurrency investing and how to apply the theory learned</li>
        <li>A strategy to help investors implement a specific course of action to identify</li>
        <li>Understanding deals to help new investors get started in the market</li>
        <li>Understanding risk management</li>
      </ul>
    </>
  ),
};

const CoursesDeatils: FC = () => {
  return (
    <div className="coursesDetailsWrapper" id="courses">
      <CourseBlock {...propsForFirstCourse} />
      <CourseBlock {...propsForSecondCourse} />
    </div>
  );
};

export default CoursesDeatils;
