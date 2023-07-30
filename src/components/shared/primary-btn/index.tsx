import { ReactNode } from 'react';
import './index.scss';

interface Props {
  href: string;
  children: ReactNode;
}

const PrimaryButton = ({ href, children }: Props) => {
  return (
    <a href={href} className="btn">
      {children}
    </a>
  );
};

export default PrimaryButton;
