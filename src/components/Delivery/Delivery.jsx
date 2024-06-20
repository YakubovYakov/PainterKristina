import React from "react";
import { useTranslation } from "react-i18next";

function Delivery() {
  const { t } = useTranslation();
  return (
    <section className="delivery">
      <h1 className="delivery__title">ДОСТАВКА</h1>
      <ol className="delivery__content">
        <li className="delivery__list">1.
          <p className="delivery__text">
            Продаем и доставляем произведения искусства
            <br /> по всему миру
          </p>
        </li>
        <li className="delivery__list">2.
          <p className="delivery__text">
            Почтовые расходы или доставка, упаковка за счет покупателя
          </p>
        </li>
        <li className="delivery__list">3.
          <p className="delivery__text">
            Ваш заказ может облагаться пошлинами и налогами,<br /> которые применяются
            в вашей стране рекомендуем связаться<br /> с местной таможней перед
            размещением заказа
          </p>
        </li>
        <li className="delivery__list">4.
          <p className="delivery__text">
            Все применимые расходы<br /> на доставку, если не оговорено иное, должны
            быть<br /> произведены до того, как мы отправим Вам товар
          </p>
        </li>
      </ol>
    </section>
  );
}

export default Delivery;
