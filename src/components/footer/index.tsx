import { FC } from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import './index.scss';

const Footer: FC = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="row">
          <div className="footerLeft">
            <h3>We would love to hear from you</h3>
            <p>
              We're always ready for a little chat, so don't hesitate to reach out to us by email
            </p>
            <a href="mailto:hello@cryptogate.courses">hello@cryptogate.courses</a>
          </div>
          <div className="footerRight row">
            <div className="col-6">
              <a href="/">Home</a>
              <a href="/#partners">Partners</a>
              <a href="/#about-us">About us</a>
              <a href="/#how-to-start">How to start</a>
            </div>
            <div className="col-6">
              <a href="/#courses">Courses</a>
              <a href="/#reviews">Reviews</a>
              <a href="/#faq">FAQ</a>
              <a href="/#countact-us">Contact us</a>
            </div>
          </div>
        </div>
        <span>© CryptoGate 2022. All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;
