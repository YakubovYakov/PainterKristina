import React from "react";
import inst from "../../images/Social icon.svg";
import pint from "../../images/Social icon 2.svg";
import back from "../../images/Frame 514546.png"
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <img className="contact__back" src={back} alt="back" />
      <h1 className="contact__title">{t('contact')}</h1>
      <div className="contact__content">
        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">{t('Design')}</h2>
            <ol className="column">
              <li className="column__name">Trend Island</li>
              <li className="column__adress">{t('adress4')} </li>
              <li className="column__tc">{t('trc')}</li>
              <li className="column__phone">+375- 29 319.33.33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
            {t('grafik23')}
            </div>

            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>

        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">{t('Design')}</h2>
            <ol className="column">
              <li className="column__name">JUICY</li>
              <li className="column__adress">{t('adress65')}</li>
              <li className="column__tc">{t('tc')}</li>
              <li className="column__phone">+375-29-319-33-33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
            {t('grafik22')}
            </div>
          </div>
        </div>

        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">{t('Art')}</h2>
            <ol className="column">
              <li className="column__name">{t('art mast')}</li>
              <li className="column__phone">+7-968-760-73-10</li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
            {t('mast grafik')}
            </div>

            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
