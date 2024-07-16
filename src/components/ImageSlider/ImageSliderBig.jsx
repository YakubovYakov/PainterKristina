import { useState } from "react";

const ImageSliderBig = ({ slides, additionalClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${
      slides[currentIndex].image || slides[currentIndex].url
    })`,
  };

  return (
    <>
      <div
        className={`card__image_big ${additionalClass}`}
        style={slideStylesWidthBackground}
      ></div>

      <div className={`circles ${additionalClass}`}>
        {slides.map((slide, slideIndex) => (
          <div
            className={
              currentIndex === slideIndex
                ? `card__circle_active ${additionalClass}`
                : `card__circle ${additionalClass}`
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ImageSliderBig;
