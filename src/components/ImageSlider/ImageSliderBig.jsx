import { useState } from "react";

const ImageSliderBig = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <>
      <div className="card__image_big" style={slideStylesWidthBackground}></div>
     
        <div className="circles">
          {slides.map((slide, slideIndex) => (
            <div
              className="card__circle"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
  
    </>
  );
};

export default ImageSliderBig;