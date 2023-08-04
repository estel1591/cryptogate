import './index.scss';

interface Props {
  question: string;
  answer: string;
}

const CollapseBlock = ({ question, answer }: Props) => {
  return (
    <div className="collapseBlock">
      <div>{question}</div>
      <div>{answer}</div>
    </div>
  );
};

export default CollapseBlock;
