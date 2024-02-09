import React from "react";
import design from "../../images/design.png";
import inst from "../../images/Social icon.svg";
import pint from "../../images/Social icon 2.svg";
import Gallery from "../Gallery/Gallery";
import { useTranslation } from 'react-i18next';


function Design() {
  const { t } = useTranslation();
  return (
    <>
      <section className="design">
        <div className="design__head">
          <h1 className="design__title">{t('design')}</h1>
          <p className="design__subtitle">
          {t('design sub')}
          </p>
        </div>
        <img className="design__image" src={design} alt="design" />
      </section>
      <section className="design__content">
        <p className="design__text">
        {t('design text')}
        </p>
        <div className="look">
           
          <div className="look__gallery">
         <Gallery/>
          </div>
        </div>
      </section>
      <section className="shop">
        <div className="title__container">
          <h1 className="look__title">{t('shop')}</h1>
        </div>
        <div className="shop__content">
          <div className="column__design">
            <h2 className="contact__column_title">{t('design')}</h2>
            <ol className="column">
              <li className="column__name">Trend Island</li>
              <li className="column__adress">{t('adress4')} </li>
              <li className="column__tc">{t('trc')}</li>
              <li className="column__phone">+375- 29 319.33.33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div>
            <div className="shop__grafik">
            {t('grafik23')}
            </div>
            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>

          <div className=" column__design">
            <h2 className="contact__column_title">{t('design')}</h2>
            <ol className="column">
              <li className="column__name">JUICY</li>
              <li className="column__adress">{t('adress65')}</li>
              <li className="column__tc">{t('tc')}</li>
              <li className="column__phone">+375-29-319-33-33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>

          <div>
            <div className="shop__grafik">
            {t('grafik22')}
            </div>
            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Design;
