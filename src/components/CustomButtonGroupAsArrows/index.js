import React from 'react';
import LeftButtonArrow from '../LeftButtonArrow';
import RightButtonArrow from '../RightButtonArrow';

const CustomButtonGroupAsArrows = ({
  // eslint-disable-next-line react/prop-types
  next, previous, goToSlide, ...rest
}) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group">
      <LeftButtonArrow className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <RightButtonArrow onClick={() => next()} />
    </div>
  );
};

export default CustomButtonGroupAsArrows;
