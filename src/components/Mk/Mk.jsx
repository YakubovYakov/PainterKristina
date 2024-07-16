import React from "react";
import arrow from "../../images/Arrow 7.svg";
import mk from "../../images/mk-pic.png";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

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
          <Link href="#" className="mk__link">
            <p className="mk__link-text">{t('mk sign')}</p>
            <img className="mk__arrow" alt="arrow" src={arrow} />
          </Link>
        </div>
        <img className="mk__image" alt="mk" src={mk} />
      </div>
    </section>
  );
}

export default Mk;
