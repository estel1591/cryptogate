import { useState, useRef } from 'react';
import { ReactComponent as CrossLogo } from '../../../icons/cross.svg';
import './index.scss';

interface Props {
  question: string;
  answer: string;
  className?: string;
}

const CollapseBlock = ({ question, answer, className }: Props) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const classNames = collapse ? `collapseBlock active ${className}` : `collapseBlock ${className}`;
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setCollapse(!collapse);
    if (contentRef.current && !collapse) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  };

  return (
    <div className={classNames}>
      <div className="collapseText">
        <div className="collapseQuestion">{question}</div>
        <div
          className="collapseAnswer"
          id="answer"
          ref={contentRef}
          style={{ height: height + 'px' }}
        >
          {answer}
        </div>
      </div>
      <CrossLogo onClick={handleClick} />
    </div>
  );
};

export default CollapseBlock;
