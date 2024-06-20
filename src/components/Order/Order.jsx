import React from "react";
import { useTranslation } from "react-i18next";
import arrow from "../../images/Arrow 7.svg";

function Order() {
  const { t } = useTranslation();
  return (
    <section className="order">
      <h1 className="order__title">ЗАКАЗАТЬ КАРТИНУ</h1>
      <form className="order__list">
        <p className="order__paragraph">
          Имя
          <input className="order__item" type="text" name="name" />
        </p>
        <p className="order__paragraph">
          Почта
          <input className="order__item" type="email" name="email" />
        </p>
        <p className="order__paragraph">
          Сообщение
          <input className="order__item" type="text" name="message" />
        </p>
      </form>
      <div className="order__container">
        <form className="order__checkbox">
          <input className="order__input-checkbox" type="checkbox" />
          <label className="order__checkbox-label">
            Я прочитал и принимаю политику конфиденциальности
          </label>
        </form>
        <button className="order__input-button" type="submit">
          ОТПРАВИТЬ
          <img alt="Submit" src={arrow} />
        </button>
      </div>
    </section>
  );
}

export default Order;
