import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].image || slides[currentIndex].url})`,
  };

  return (
    <>
      <div className="card__image" style={slideStylesWidthBackground}></div>
      <div className="circles">
        {slides.map((slide, slideIndex) => (
          <div
            className={currentIndex === slideIndex ? 'card__circle_active' : 'card__circle'}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
