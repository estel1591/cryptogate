import { FC } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import PrimaryButton from '../../components/shared/primary-btn';

const Menu: FC = () => {
  return (
    <div className="menuWrapper">
      <div className="menu">
        <div className="logo">
          <Logo />
        </div>
        <PrimaryButton href="/#countact-us">get a course</PrimaryButton>
      </div>
    </div>
  );
};

export default Menu;
