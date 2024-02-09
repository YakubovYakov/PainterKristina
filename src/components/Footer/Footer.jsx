import React from "react";
import inst from "../../images/Social icon.svg";
import pint from "../../images/Social icon 2.svg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <><section className="footer footer__full">

      <nav className="footer__top">
        <div className="footer__links">
          <Link to="/contact" className="footer__link">
          {t('Contact')}
          </Link>
          <Link to="/delivery" className="footer__link">
          {t('Deleviery')}
          </Link>
          <Link to="/cooperation" className="footer__link">
          {t('Coop')}
          </Link>
          <Link to="/order" className="footer__link">
          {t('Order')}
          </Link>
        </div>
        <div className="footer__icons">
          <a href="https://www.instagram.com/" target="_blank">
            <img className="column__icon" alt="icon" src={inst} />
          </a>
          <a href="https://ru.pinterest.com/" target="_blank">
            <img className="column__icon" alt="icon" src={pint} />
          </a>
        </div>
      </nav>
      <div className="footer__contact">
        <Link to="/*" class="header__title footer__logo">
          AFANASEVA ART Studio{" "}
        </Link>
        <div className="footer__contact_info">
          <p className="footer__text">
            Есть вопросы? Позвоните нам. Позвоните нам с 9 утра до 7 вечера по
            телефону <span className="footer__span">+7-968-760-73-10</span> с понедельника по субботу
            Telegram, WhatsApp <span className="footer__span">+375-44-741-00-40</span>
          </p>
          <p className="footer__pravila">Правила и Условия</p>
          <p className="footer__copy">© 2023 AFANASEVA ART STUDIO</p>
        </div>
      </div>
    </section><section className=" footer footer__small">

        <nav className="footer__left">
          <div className="footer__links">
            <Link to="/contact" className="footer__link">
              Контакт
            </Link>
            <Link to="/delivery" className="footer__link">
              Доставка
            </Link>
            <Link to="/cooperation" className="footer__link">
              Сотрудничество
            </Link>
            <Link to="/order" className="footer__link">
              Заказать Картину
            </Link>
          </div>
          <div className="footer__contact_small">
         
         <div className="footer__contact_info">
           <p className="footer__text">
             Есть вопросы? Позвоните нам. Позвоните нам с 9 утра до 7 вечера по
             телефону <span className="footer__span">+7-968-760-73-10</span> с понедельника по субботу
             Telegram, WhatsApp <span className="footer__span">+375-44-741-00-40</span>
           </p>
           <p className="footer__pravila">Правила и Условия</p>
           <p className="footer__copy">© 2023 AFANASEVA ART STUDIO</p>
         </div>
       </div>
          </nav>
          <div className="footer__right">
          <div className="footer__icons">
            <div className="footer__icons_elem">
            <a href="https://www.instagram.com/" target="_blank">
              <img className="column__icon" alt="icon" src={inst} />
            </a>
            <a href="https://ru.pinterest.com/" target="_blank">
              <img className="column__icon" alt="icon" src={pint} />
            </a>
            </div>
            <Link to="/*" class="header__title footer__logo">
            AFANASEVA ART Studio{" "}
          </Link>
          </div>
       
        <div className="footer__contact">
         
          <div className="footer__contact_info">
            <p className="footer__text">
              Есть вопросы? Позвоните нам. Позвоните нам с 9 утра до 7 вечера по
              телефону <span className="footer__span">+7-968-760-73-10</span> с понедельника по субботу
              Telegram, WhatsApp <span className="footer__span">+375-44-741-00-40</span>
            </p>
            <p className="footer__pravila">Правила и Условия</p>
            <p className="footer__copy">© 2023 AFANASEVA ART STUDIO</p>
          </div>
        </div>
        </div>
      </section></>
  );
}

export default Footer;
