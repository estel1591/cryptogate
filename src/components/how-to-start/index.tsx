import { FC } from 'react';
import InfoBlock from '../shared/info-block';
import CardBlock from '../shared/card-block';
import { ReactComponent as StoneFirst } from '../../icons/stone1.svg';
import { ReactComponent as StoneSecond } from '../../icons/stone2.svg';
import { ReactComponent as StoneThird } from '../../icons/stone3.svg';
import { ReactComponent as StoneForth } from '../../icons/stone4.svg';
import './index.scss';

const HowToStart: FC = () => {
  return (
    <div className="howToStartWrapper">
      <InfoBlock title="How to start">
        <div className="row howToStartRow">
          <CardBlock
            title="Choose a course"
            icon={<StoneFirst />}
            className="howToStartBlock col-6"
          >
            After choosing a course, leave your email address for instructions, payment
          </CardBlock>
          <CardBlock title="Get access" icon={<StoneSecond />} className="howToStartBlock col-6">
            After successful payment you will receive an email with a link to the paid course
          </CardBlock>
        </div>
        <div className="row">
          <CardBlock title="Start learning" icon={<StoneThird />} className="howToStartBlock col-6">
            Get new knowledge of crypto investing. Our tests will help to check materials
          </CardBlock>
          <CardBlock
            title="Get a certificate"
            icon={<StoneForth />}
            className="howToStartBlock col-6"
          >
            Now you can bravely take your first steps on the way to financial freedom.
          </CardBlock>
        </div>
      </InfoBlock>
    </div>
  );
};

export default HowToStart;
