import PrimaryButton from '../primary-btn';
import './index.scss';

interface Props {
  price: string;
}

const PriceWithButton = ({ price }: Props) => {
  return (
    <>
      <p className="priceWrapper">
        <span>{price}</span> course price
      </p>
      <PrimaryButton href="/#countact-us">get a course</PrimaryButton>
    </>
  );
};

export default PriceWithButton;
