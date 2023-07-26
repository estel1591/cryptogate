import React, { FC } from 'react';
import './index.scss';
import { ReactComponent as ReactLogo } from '../../icons/logo.svg';

const Menu: FC = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          <ReactLogo />
        </div>
        <a href="/" className="btn">
          get a course
        </a>
      </div>
    </div>
  );
};

export default Menu;
