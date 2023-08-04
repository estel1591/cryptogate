import { ReactNode } from 'react';
import { ReactComponent as CommasLogo } from '../../icons/commas.svg';
import { ReactComponent as StarsLogo } from '../../icons/stars.svg';
import './index.scss';

interface Props {
  sign: string;
  children: ReactNode;
}

const Slide = ({ sign, children }: Props) => {
  return (
    <div className="slideWrapper">
      <CommasLogo />
      <div className="slideText">
        <div>{children}</div>
        <span>{sign}</span>
      </div>
      <StarsLogo />
    </div>
  );
};

export default Slide;
