import { FC } from 'react';
import Slider from 'react-slick';
import Slide from './slide';
import './index.scss';

const Carousel: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carouselWrapper" id="reviews">
      <Slider {...settings}>
        <Slide sign="Ann, USA">
          Earning a professional certification in cryptocurrency courses: This is one of my big
          accomplishments in my education, and it was a key step towards my new life with investing
          in digital assets, following everyone else.
        </Slide>
        <Slide sign="Nadia, Germany">
          Earning a professional certification in cryptocurrency courses: This is one of my big
          accomplishments in my education, and it was a key step towards my new life with investing
          in digital assets, following everyone else.
        </Slide>
      </Slider>
    </div>
  );
};

export default Carousel;
