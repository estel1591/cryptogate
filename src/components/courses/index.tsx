import { FC } from 'react';
import InfoBlock from '../shared/info-block';
import Features from '../features';
import './index.scss';

const Courses: FC = () => {
  return (
    <div className="coursesWrapper" id="about-us">
      <InfoBlock title="Courses in crypto finance">
        <p>
          It all started with the fact that cryptocurrency became a real digital asset, which was
          already difficult to ignore while staying in the trend. So the idea came up to create
          courses. Ideally, a system of courses for different levels.
        </p>
        <p>
          We not only offer courses about crypto investing and trading, but also we help our
          students understand what the crypto world is and its benefits for anyone.
        </p>
      </InfoBlock>
      <Features />
    </div>
  );
};

export default Courses;
