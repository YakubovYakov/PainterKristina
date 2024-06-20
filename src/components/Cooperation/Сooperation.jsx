import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/Arrow 7.svg";
// import coop from "../../images/cooperation.png";
// import coop_bot from "../../images/Frame 514543.png";
import { useTranslation } from "react-i18next";

function Cooperation() {
  const { t } = useTranslation();
  return (
    <section className="cooperation">
      <h1 className="cooperation__title">СОТРУДНИЧЕСТВО</h1>

      <div className="cooperation__content">
        <p className="cooperation__text">
          Благодарим вас за проявленный интерес к нашей творческой мастерской.
          Наша миссия — продвигать современных художников и их произведения
          искусства среди коллекционеров, любителей, дизайнеров интерьеров,
          которые ищут новых и перспективных талантов в мире искусства. Мы не
          взимаем никакой комиссии с наших продавцов произведений искусства, вы
          платите только ежемесячный членский взнос за ваш профиль на нашей
          платформе
        </p>
        <Link href="" target="blank" className="cooperation__link">
          ПРИСОЕДИНИТЬСЯ <img alt="Submit" src={arrow} />
        </Link>
      </div>
    </section>
  );
}

export default Cooperation;
