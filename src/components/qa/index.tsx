import { FC } from 'react';
import InfoBlock from '../shared/info-block';
import './index.scss';

const QAComponent: FC = () => {
  return (
    <div className="qaWrapper">
      <InfoBlock title="Your questions, our answers">
        <p>13</p>
      </InfoBlock>
    </div>
  );
};

export default QAComponent;
