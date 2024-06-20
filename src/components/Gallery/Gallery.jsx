import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import slide_image_1 from "../../images/look1.png";
import slide_image_2 from "../../images/look2.png";
import slide_image_3 from "../../images/look3.png";
import slide_image_4 from "../../images/look4.png";
import slide_image_5 from "../../images/look1.png";
import slide_image_6 from "../../images/look2.png";
import slide_image_7 from "../../images/look3.png";

function Gallery() {
  const { t } = useTranslation();

  useEffect(() => {
    const wrapper = document.querySelector(".gallery__container");

    let pressed = false;
    let startX = 0;

    const handleMouseDown = (event) => {
      pressed = true;
      startX = event.clientX;
      wrapper.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      pressed = false;
      wrapper.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      pressed = false;
      wrapper.style.cursor = "grab";
    };

    const handleMouseMove = (event) => {
      if (!pressed) return;
      wrapper.scrollLeft += startX - event.clientX;
      startX = event.clientX;
    };

    // Проверяем мобильное устройство
    if (window.innerWidth <= 415) {
      wrapper.addEventListener("mousedown", handleMouseDown);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("mouseup", handleMouseUp);
      wrapper.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="gallery">
      <div className="gallery__loockbook">
        <div className="title__container">
          <h1 className="look__title">{t("look")}</h1>
        </div>
      </div>
      <div className="gallery__container">
        <div className="gallery__picture card-1" alt="card1"></div>
        <div className="gallery__picture card-2" alt="card1"></div>
        <div className="gallery__picture card-3" alt="card1"></div>
      </div>
    </section>
  );
}

export default Gallery;
