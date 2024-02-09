import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from '../../images/look1.png';
import slide_image_2 from '../../images/look2.png';
import slide_image_3 from '../../images/look3.png';
import slide_image_4 from '../../images/look4.png';
import slide_image_5 from '../../images/look1.png';
import slide_image_6 from '../../images/look2.png';
import slide_image_7 from '../../images/look3.png';
import arrow from '../../images/Arrow.svg';
function Gallery() {
  let slidesPerView = 3;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    slidesPerView = 2;
  }  if (screenWidth <= 480) {
    slidesPerView = 1;
  }
  const { t } = useTranslation();
  return (

    <div className="container">
          <div className="look__top">
          <div className="title__container">
            <h1 className="look__title">{t('look')}</h1>
          </div>
          <div className="look__arrows">
            <img className="look__arrow_left" src={arrow} alt="arrow" />
            <img className="look__arrow_right" src={arrow} alt="arrow" />
          </div>
          </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        spaceBetween={32}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: '.look__arrow_right',
          prevEl: '.look__arrow_left',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Gallery;