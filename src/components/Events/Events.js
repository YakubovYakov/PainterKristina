import React from "react";
import arrow from "../../images/Arrow 7.svg";
import "./Events.css";

const Events = () => {
  return (
    <div className="events">
      <div className="events__container">
        <h1 className="events__title">СОБЫТИЯ</h1>
      </div>
      <h2 className="events__text">
        Подпишитесь на нашу рассылку, чтобы быть в курсе галерейных выставок,
        новостей и событий
      </h2>
      <form className="events__form">
        <input
          className="events__input"
          type="email"
          placeholder="ВАШ ЭЛЕКТРОННЫЙ АДРЕС"
        />
        <button className="order__input-button" type="submit">
          <img alt="Submit" src={arrow} />
        </button>
      </form>
    </div>
  );
};

export default Events;
