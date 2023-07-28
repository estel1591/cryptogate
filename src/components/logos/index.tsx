import { FC } from 'react';
import { ReactComponent as CoinBaseLogo } from '../../icons/coinbase.svg';
import { ReactComponent as MetaMaxLogo } from '../../icons/metamask.svg';
import { ReactComponent as AvalanceLogo } from '../../icons/avalance.svg';
import { ReactComponent as AaveLogo } from '../../icons/aave.svg';
import './index.scss';

const Logos: FC = () => {
  return (
    <div className="logoWrapper">
      <CoinBaseLogo />
      <MetaMaxLogo />
      <AvalanceLogo />
      <AaveLogo />
    </div>
  );
};

export default Logos;
