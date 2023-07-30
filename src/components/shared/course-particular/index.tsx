import { ReactComponent as Persone } from '../../../icons/persone.svg';
import { ReactComponent as Cap } from '../../../icons/cap.svg';
import { ReactComponent as Tick } from '../../../icons/tick.svg';
import './index.scss';

interface Props {
  module: string;
  duration: string;
  lesson: string;
  lessonTime: string;
  students: string;
  type: string;
}

const CourseParticular = ({ module, duration, lesson, lessonTime, students, type }: Props) => {
  return (
    <div className="courseParticular">
      <p className="title">Course details:</p>
      <ul className="list">
        <li>
          <span>Module: </span>
          {module}
        </li>
        <li>
          <span>Duration: </span>
          {duration} weeks
        </li>
        <li>
          <span>Lesson: </span>
          {lesson}
        </li>
        <li>
          <span>Lesson time: </span>
          {lessonTime} hours
        </li>
      </ul>
      <ul className="list">
        <li>
          <Persone />
          for {type}
        </li>
        <li>
          <Cap />
          {students} students
        </li>
        <li>
          <Tick /> a digital certificate <br /> after the exam
        </li>
      </ul>
    </div>
  );
};

export default CourseParticular;
