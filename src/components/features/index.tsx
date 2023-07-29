import { FC } from 'react';
import CardBlock from '../shared/card-block';
import { ReactComponent as AdvantageFirst } from '../../icons/advantage1.svg';
import { ReactComponent as AdvantageSecond } from '../../icons/advantage2.svg';
import { ReactComponent as AdvantageThird } from '../../icons/advantage3.svg';
import './index.scss';

const Features: FC = () => {
  return (
    <div className="row">
      <CardBlock title="Clear and Simple" icon={<AdvantageFirst />} className="featureBlock col-4">
        Our goal is to make everything easy and straightforward so that more people can focus on
        generating digital income.
      </CardBlock>
      <CardBlock title="For everyone" icon={<AdvantageSecond />} className="featureBlock col-4">
        We have a course for both beginners and those who have already taken their first steps in
        crypto investing and trading.
      </CardBlock>
      <CardBlock title="It works" icon={<AdvantageThird />} className="featureBlock col-4">
        Each course covers a few strategies that can be applied in real market conditions and terms.
      </CardBlock>
    </div>
  );
};

export default Features;
