import { ReactNode } from 'react';
import './index.scss';

interface Props {
  title: string;
  children: ReactNode;
}

const InfoBlock = ({ title, children }: Props) => {
  return (
    <div className="infoWrapper row">
      <h2 className="col-4">{title}</h2>
      <div className="col-8">{children}</div>
    </div>
  );
};

export default InfoBlock;
