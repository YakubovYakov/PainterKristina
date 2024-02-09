import React from "react";
import snake from "../../images/snakeart.png";
import lion from "../../images/lion.png";
import arrow from "../../images/Arrow.svg";
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="about">
        <div className="about__description">
          <h1 className="art__title">{t('artist')}</h1>
          <h2 class="art__name">{t('full name')}</h2>
          <div className="art__text_container">
            <p className="about__text ">
            {t('about text')}
            </p>
          </div>
        </div>
      </section>
      <section className="about__snake">
        <div className="about__snake_container">
          <img className="about__snake_image" src={snake} alt="snake" />
          <p className="about__snake_text">
          {t('signature snake')}{" "}
          </p>
        </div>
      </section>
      <section className="about__lion">
        <div className="lion__description">
          <h2 className="lion__title">{t('About')}</h2>
          <p className="lion__text">
          {t('about kristina')}
          </p>
        </div>
        <div className="lion__pic">
          <img className="lion__image" src={lion} alt="lion" />
          <p className="lion__image_text">{t('signature lion')}</p>
        </div>
      </section>
      <section className="exhibition">
        <div className="title__container">
          <h1 className="exhibition__title">{t('exhibition')}</h1>
          </div>
          <div className="table">
            <div className="table__top">
              <a href="#" className="table__title">
                <p>{t('mk sign')}</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>
              <span className="table__line_top"></span>
              <a href="#" className="table__title table__title_full">
                <p>{t('buy art')}</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>
            </div>
            <div className="table__bot">
              <div className="table__text">
                <p className="table__bot_title">
                {t('exhibition title1')}
                </p>
                <p className="table__bot_text">
                {t('exhibition text1')}
                </p>
              </div>
              <span className="table__line_bot"></span>
              <div className="table__text">
                <p className="table__bot_title">{t('exhibition title2')}</p>
                <p className="table__bot_text">
                {t('exhibition text2')}
                </p>
              </div>
            </div>
            <a href="#" className="table__title table__title_mobile">
                <p > {t('buy art')}</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>

          </div>
      
      </section>
    </>
  );
}

export default About;
