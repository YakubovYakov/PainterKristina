import React from "react";
import { useTranslation } from 'react-i18next';


function Order() {
  const { t } = useTranslation();
  return (
    <section className="order">
      <h1 className="order__title">{t('order')}</h1>
      <div className="order__content">
        <p className="order__text">
    
        </p>
        <p className="order__email">{t('order text')}</p>
      </div>

    </section>
  );
}

export default Order;
