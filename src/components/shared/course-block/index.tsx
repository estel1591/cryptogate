import { ReactNode } from 'react';
import PriceWithButton from '../price-with-button';
import CourseNumber from '../course-number';
import CourseParticular from '../course-particular';
import './index.scss';

interface Props {
  courseNumber: string;
  title: string;
  children: ReactNode;
  particular: {
    module: string;
    duration: string;
    lesson: string;
    lessonTime: string;
    students: string;
    type: string;
  };
  price: string;
  icon: ReactNode;
}

const CourseBlock = ({ courseNumber, title, children, particular, price, icon }: Props) => {
  return (
    <div className="courseBlock">
      <div className="courseBlockLeft">
        <CourseNumber number={courseNumber} />
        <h2>{title}</h2>
        <div className="courseParticularWrapper">
          <p className="courseParticularDescription">{children}</p>
          <CourseParticular {...particular} />
          <PriceWithButton price={price} />
        </div>
        {icon}
      </div>
    </div>
  );
};

export default CourseBlock;
