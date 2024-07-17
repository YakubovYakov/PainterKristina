import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import close from "../../images/CloseCircle.svg";
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../../i18n';

const Navbar = () => {
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
      <div className="header">
        <Link to="/*" className="header__title">
          AFANASEVA ART Studio{" "}
        </Link>
        <ol className="header__right">
           <button className="header__lang" onClick={handleLenguageChange}>
                {language === 'ru' ? t('EN') : t('RU')}
            </button>
          
          <div className="header__burger " onClick={() => setNav(true)}>
            {" "}
          </div>
        </ol>
      </div>
      <section >
        <div
          className={nav ? [style.menu, style.active].join(" ") : [style.menu]}
        >
          <div className="header menu__header">
            <Link onClick={() => setNav(false)} to="/*" className="header__title">
              AFANASEVA ART Studio{" "}
            </Link>
            <ol className="header__right">
            <button className="header__lang" onClick={handleLenguageChange}>
                {language === 'ru' ? t('EN') : t('RU')}
            </button>
              <div >
                <img className="header__close" onClick={() => setNav(false)} src={close} alt="icon" />
              </div>
            </ol>
          </div>
          <h1 className="menu__title">{t('menu')}</h1>
          <ol className="menu__links">
            <Link onClick={() => setNav(false)} to="/art" className="menu__link">
            {t('art')}{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/design" className="menu__link">
            {t('design')}{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/about" className="menu__link">
              {t('about')}{" "}
            </Link>
            <Link
              onClick={() => setNav(false)}
              to="/contact"
              className="menu__link"
            >
              {t('contact')}{" "}
            </Link>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Navbar;
