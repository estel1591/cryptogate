import { FC } from 'react';
import './index.scss';

const Form: FC = () => {
  return (
    <div className="formWrapper">
      <div className="row formBlock">
        <div className="col-6">
          <h2>Let’s just make it together</h2>
          <p>Leave your contact details so we can reach you</p>
        </div>
        <div className="col-6">
          <form>
            <input type="text" id="name" name="name" required placeholder="Your name" />
            <input type="text" name="email" id="email" required placeholder="Your email" />
            <button type="submit" className="btn">
              discover new opportunities
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
