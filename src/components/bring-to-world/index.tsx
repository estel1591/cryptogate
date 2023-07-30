import { FC } from 'react';
import InfoBlock from '../shared/info-block';
import './index.scss';

const BringToWorld: FC = () => {
  return (
    <div className="bringToWorldWrapper">
      <InfoBlock title="Bringing the world to CRYPTO">
        <p>
          We believe in cryptocurrency and the crypto future for all, where everyone has an equal
          opportunity. Diversification, digital income, less financial dependence on banking
          institutions - these are not just words to us. We live in this reality that we create
          ourselves.
        </p>
      </InfoBlock>
    </div>
  );
};

export default BringToWorld;
