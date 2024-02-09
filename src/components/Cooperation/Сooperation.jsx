import React from "react";
import arrow from "../../images/Arrow.svg";
import coop from "../../images/cooperation.png";
import coop_bot from "../../images/Frame 514543.png";
import { useTranslation } from 'react-i18next';

function Cooperation() {
  const { t } = useTranslation();
  return (
    <section className="cooperation">
      <h1 className="cooperation__title">{t('coop')}</h1>

      <div className="cooperation__content">
        <p className="cooperation__text">
        {t('coop text')}
        </p>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%C2%AB%D0%92%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%9F%D0%BE%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%C2%BB"
          target="blank"
          className="mk__link"
        >
          <p className="cooperation__link">
          {t('coop invite')}
          </p>
          <img className="mk__arrow" alt="arrow" src={arrow} />
        </a>
      </div>
      <img className="cooperation__image" src={coop} alt="coop" />
      <img className="cooperation__image_bot" src={coop_bot} alt="coop" />
    </section>
  );
}

export default Cooperation;
