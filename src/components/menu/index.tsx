import { FC } from 'react';
import './index.scss';
import { ReactComponent as Logo } from '../../icons/logo.svg';

const Menu: FC = () => {
  return (
    <div className="menuWrapper">
      <div className="menu">
        <div className="logo">
          <Logo />
        </div>
        <a href="/" className="btn">
          get a course
        </a>
      </div>
    </div>
  );
};

export default Menu;
