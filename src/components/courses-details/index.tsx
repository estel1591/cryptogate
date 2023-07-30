import { FC } from 'react';
import CourseNumber from '../shared/course-number';
import CourseParticular from '../shared/course-particular';
import { ReactComponent as StoneFifth } from '../../icons/stone5.svg';
import './index.scss';

const CoursesDeatils: FC = () => {
  return (
    <div className="coursesDetailsWrapper row">
      <div className="courseBlock">
        <div className="courseMainInfo">
          <CourseNumber number="1" />
          <h2>Cryptocurrency as a digital asset</h2>
          <div className="row">
            <div className="CourseParticularWrapper">
              <p>
                Learn from scratch about blockchain, Bitcoin, Ethereum, mining, bubble/boom, and how
                to make a profit trading cryptocurrency through this online course.
              </p>
              <CourseParticular
                module="5"
                duration="4"
                lesson="20"
                lessonTime="1-2"
                students="12,058"
                type="beginners"
              />
            </div>
            <StoneFifth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDeatils;
