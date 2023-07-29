import { FC } from 'react';
import { ReactComponent as Circles } from '../../icons/circles.svg';
import './index.scss';

const Traders: FC = () => {
  return (
    <div className="tradersWrapper row">
      <h2 className="col-8">
        Traders and liquidity providers participate together in a financial market that is open and
        accessible to all.
      </h2>
      <div className="col-4 tradersIcon">
        <Circles />
      </div>
    </div>
  );
};

export default Traders;
