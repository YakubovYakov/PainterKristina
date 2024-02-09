import React from "react";
import arrow from "../../images/Arrow.svg";
import mk from "../../images/mk-pic.png";
import { useTranslation } from 'react-i18next';

function Mk() {
  const { t } = useTranslation();
  return (
    <section className="mk">
      <div className="title__container">
        <h1 className="mk__title">{t('mk')}</h1>
      </div>
      <div className="mk__content">
        <div className="mk__description">
          <p className="mk__text">
          {t('mk text')}
          </p>
          <a href="#" className="mk__link">
            <p>{t('mk sign')}</p>
            <img className="mk__arrow" alt="arrow" src={arrow} />
          </a>
        </div>
        <img className="mk__image" alt="mk" src={mk} />
      </div>
    </section>
  );
}

export default Mk;
