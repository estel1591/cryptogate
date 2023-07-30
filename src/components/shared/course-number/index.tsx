import './index.scss';

interface Props {
  number: string;
}

const CourseNumber = ({ number }: Props) => {
  return <p className="courseNumber">Course #{number}</p>;
};

export default CourseNumber;
