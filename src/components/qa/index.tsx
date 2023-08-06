import { FC } from 'react';
import InfoBlock from '../shared/info-block';
import CollapseBlock from '../shared/collapse-block';
import './index.scss';

const QAComponent: FC = () => {
  return (
    <div className="qaWrapper" id="faq">
      <InfoBlock title="Your questions, our answers">
        <CollapseBlock
          question="How can I get a course certificate?"
          answer="You can earn a course certificate after you successfully pass the exam. The course certificate is proof that you have successfully completed and passed the course."
        />
        <CollapseBlock
          question="How relevant are the course materials?"
          answer="You can earn a course certificate after you successfully pass the exam. The course certificate is proof that you have successfully completed and passed the course."
        />
        <CollapseBlock
          question="How open is access to the course that was paid for?"
          answer="You can earn a course certificate after you successfully pass the exam. The course certificate is proof that you have successfully completed and passed the course."
        />
        <CollapseBlock
          question="Is it possible to start an advanced course right away when you know the basics?"
          answer="You can earn a course certificate after you successfully pass the exam. The course certificate is proof that you have successfully completed and passed the course."
        />
        <CollapseBlock
          question="Is there any way to set a different subtitle language?"
          answer="You can earn a course certificate after you successfully pass the exam. The course certificate is proof that you have successfully completed and passed the course."
          className="borderStyle"
        />
      </InfoBlock>
    </div>
  );
};

export default QAComponent;
