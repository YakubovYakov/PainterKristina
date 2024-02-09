import React from "react";
import { useTranslation } from 'react-i18next';

function Art() {
  const { t } = useTranslation();
  return (
    <section className="art">
      <div className="art__description">
        <h1 className="art__title">{t('art')}</h1>
        <h2 class="art__name">{t('full name')}</h2>
        <div className="art__text_container">
          <p className="art__text">
          {t('art subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Art;
