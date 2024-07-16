import React from "react";
import { useTranslation } from "react-i18next";
import arrow from "../../images/Arrow 7.svg";
import img from "../../images/order.png";

function Order() {
  const { t } = useTranslation();
  return (
    <section class="order">
      <h1 class="order__title">ЗАКАЗАТЬ КАРТИНУ</h1>
      <form class="order__list">
        <p class="order__paragraph">
          <label for="name">Имя</label>
          <input class="order__item" type="text" id="name" name="name" />
        </p>
        <p class="order__paragraph">
          <label for="email">Почта</label>
          <input class="order__item" type="email" id="email" name="email" />
        </p>
        <p class="order__paragraph">
          <label for="message">Сообщение</label>
          <input class="order__item" type="text" id="message" name="message" />
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
			<div className="order__img-container">
				<img className="order__img" src={img} alt="image lion" />
			</div>
    </section>
  );
}

export default Order;
