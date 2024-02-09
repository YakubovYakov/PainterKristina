import React from "react";
import { useTranslation } from 'react-i18next';

function Delivery() {
  const { t } = useTranslation();
  return (
    <section className="delivery">
      
      <ol className="delivery__content">
      <h1 className="delivery__title">{t('deleveiry')}</h1>
        <li className="delivery__el">
        {t('del el1')}{" "}
        </li>
        <li className="delivery__el">
        {t('del el2')}
        </li>
        <li className="delivery__el">
        {t('del el3')}
        </li>
        <li className="delivery__el">
        {t('del el4')}{" "}
        </li>
      </ol>

    </section>
  );
}

export default Delivery;
