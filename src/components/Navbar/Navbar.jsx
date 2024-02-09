import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import close from "../../images/CloseCircle.svg";
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../../i18n';

const NAvbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleLenguageChange = () => {
      if (language === 'en') {
          i18n.changeLanguage('ru');
          setLanguage('ru');
      } else if (language === 'ru') {
          i18n.changeLanguage('en');
          setLanguage('en');
      }
  };
  return (
    <>
      <div class="header">
        <Link to="/*" class="header__title">
          AFANASEVA ART Studio{" "}
        </Link>
        <ol class="header__right">
           <button className="header__lang" onClick={handleLenguageChange}>
                {language === 'ru' ? t('EN') : t('RU')}
            </button>
          <li class="header__search"></li>
          <div className="header__burger " onClick={() => setNav(true)}>
            {" "}
          </div>
        </ol>
      </div>
      <section >
        <div
          className={nav ? [style.menu, style.active].join(" ") : [style.menu]}
        >
          <div class="header menu__header">
            <Link onClick={() => setNav(false)} to="/*" class="header__title">
              AFANASEVA ART Studio{" "}
            </Link>
            <ol class="header__right">
            <button className="header__lang" onClick={handleLenguageChange}>
                {language === 'ru' ? t('EN') : t('RU')}
            </button>
              <li class="header__search"></li>
              <div >
                <img className="header__close" onClick={() => setNav(false)} src={close} alt="icon" />
              </div>
            </ol>
          </div>
          <h1 class="menu__title">{t('menu')}</h1>
          <ol class="menu__links">
            <Link onClick={() => setNav(false)} to="/art" class="menu__link">
            {t('art')}{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/design" class="menu__link">
            {t('design')}{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/about" class="menu__link">
              {t('about')}{" "}
            </Link>
            <Link
              onClick={() => setNav(false)}
              to="/contact"
              class="menu__link"
            >
              {t('contact')}{" "}
            </Link>
          </ol>
        </div>
      </section>
    </>
  );
};

export default NAvbar;
