import React from "react";
import header_big from "../../images/main-pic.png";
import header_small from "../../images/Frame 514486.png";
import { useTranslation } from 'react-i18next';


function Main() {
  const { t } = useTranslation();
  return (
    <main class="main-page">
      <section class="main">

    
        <div class="main__name">
          <h2 class="main__name_text">{t('last name')}</h2>
          <h2 class="main__name_text">{t('name')}</h2>
        </div>

        <h1 class="main__subtitle">{t('main title')}</h1>
        <div class="main__text_container">
          <p class="main__text">
          {t('main subtitle')}
          </p>
        </div>
        <img className="main__image_big" src={header_big} alt="main"></img>
        <img className="main__image_small" src={header_small} alt="main"></img>
      </section>
    </main>
  );
}

export default Main;
