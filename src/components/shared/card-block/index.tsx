import { ReactNode } from 'react';
import './index.scss';

interface Props {
  title: string;
  className?: string;
  children: ReactNode;
  icon: ReactNode;
}

const CardBlock = ({ icon, title, className, children }: Props) => {
  return (
    <div className={`cardBlock ${className}`}>
      {icon}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default CardBlock;
