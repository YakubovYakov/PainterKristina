import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ImageSliderBig from "../ImageSlider/ImageSliderBig";
import { useTranslation } from "react-i18next";
/** Белый прайс */
import whitePrice from "../../images/img/price-white.png";
/** Маленький прайс */
import smallPrice from "../../images/img/price-small.png"
//Пионы
import pion1 from "../../images/img/pion1-min.png";
import pion2 from "../../images/img/pion2-min.png";
//Мама
import mama1 from "../../images/img/mom1-min.png";
import mama2 from "../../images/img/mom2-min.png";
//Тигр
import tiger1 from "../../images/img/tiger1-min.png";
import tiger2 from "../../images/img/image-tiger-2-min.jpg";
//Орел
import eagle1 from "../../images/img/heagle1-min.png";
import eagle2 from "../../images/img/heagle2-min.png";

// -----------
//Бабочка
import butterfly1 from "../../images/img/butterfly1-min.png";
/** Вторая картинка бабочки */
import priceMedium from "../../images/img/price-medium.png";
// ------------

//Лев
import lion1 from "../../images/img/lion1-min.png";
import lion2 from "../../images/img/lion2-min.png";
/* Жук */
import zhuk1 from "../../images/img/zhuk1-min.png";
import zhuk2 from "../../images/img/zhuk2-min.png";
/** Золотой орел */
import goldEagle1 from "../../images/img/gold-eagle1-min.png";
import goldEagle2 from "../../images/img/gold-eagle-2-min.png";
/** Ирис */
import iris1 from "../../images/img/iris1-min.png";
/** Золотой тигр */
import goldTiger1 from "../../images/img/blue-tiger-1-min.png";
import goldTiger2 from "../../images/img/blue-tiger-2-min.png";
/** Змея */
import snake1 from "../../images/img/snake1-min.png";
import snake2 from "../../images/img/snake2-min.png";
/** Лилия */
import flowers1 from "../../images/img/flowers1-min-min.png";
import flowers2 from "../../images/img/flowers-2-min.png";
/** Лабиринт */
import labirint1 from "../../images/img/labirint1-min.png";

import price from "../../images/price.png";

import butterfly3 from "../../images/image-3-butterfly.png";

function ArtCard() {
  const { t } = useTranslation();
  const slidesPion = [
    { image: pion1 },
    { image: pion2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesMama = [
    { image: mama1 },
    { image: mama2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesTiger = [
    { image: tiger1 },
    { image: tiger2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesOrel = [
    { image: eagle1 },
    { image: eagle2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesButterfly = [
    { image: butterfly1 },
    { url: "https://i.ibb.co/yP0PF02/batterfly-interier.png" },
    { image: priceMedium },
  ];

  const slidesLev = [
    { image: lion1 },
    { image: lion2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesZhuk = [
    { image: zhuk1 },
    { image: zhuk2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesGoldOrel = [
    { image: goldEagle1 },
    { image: goldEagle2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesIris = [
    { image: iris1 },
    { url: "https://i.ibb.co/dbMzqpR/iris-interier.png" },
    { image: smallPrice },
  ];

  const slidesGoldTiger = [
    { image: goldTiger1 },
    { image: goldTiger2 },
    { image: whitePrice },
  ];

  const slidesSnake = [
    { image: snake1 },
    { image: snake2 },
    { image: whitePrice },
  ];

	const slidesLiliya = [
    { image: flowers1 },
    { image: flowers2 },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesLabirint = [
    { image: labirint1 },
    { url: "https://i.ibb.co/5nQBHNY/labirint-interier.png" },
    { image: smallPrice },
  ];

  

  return (
    <section className="art-container">
      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesPion} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("pion")}, 2023</h2>
          <p className="card__text">{t("pion about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">75.000 ₽</p>
        </div>
      </div>
      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesMama} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("mama")}, 2023</h2>
          <p className="card__text">{t("mama about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">75.000 ₽</p>
        </div>
      </div>
      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesTiger} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("tigr")}, 2023</h2>
          <p className="card__text">{t("tigr about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesOrel} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("orel")}, 2023</h2>
          <p className="card__text">{t("orel about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card__big">
        <div className="card__pic_big">
          <div className="card__image_big">
            <ImageSliderBig slides={slidesButterfly} />
          </div>
        </div>
        <div className="card__description_big">
          <h2 className="card__title">{t("butterfly")}, 2023</h2>
          <p className="card__text">{t("butterfly about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesLev} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("lev")}, 2023</h2>
          <p className="card__text lev">{t("lev about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesZhuk} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("zhuk")}, 2023</h2>
          <p className="card__text">{t("zhuk about")}</p>
          <p className="card__size">100х70</p>
          <p className="card__price">50.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesGoldOrel} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("gold orel")}, 2023</h2>
          <p className="card__text">{t("gold orel about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card__big">
        <div className="card__pic_big unique-class">
          <ImageSliderBig slides={slidesIris} additionalClass="unique-class" />
        </div>
        <div className="card__description_big">
          <h2 className="card__title">{t("gold labirint")}, 2023</h2>
          <p className="card__text">{t("gold labirint about")}</p>
          <p className="card__size">100х70</p>
          <p className="card__price">50.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesGoldTiger} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("gold tigr")}, 2023</h2>
          <p className="card__text">{t("gold tigr about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesSnake} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("snake")}, 2023</h2>
          <p className="card__text">{t("snake about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesLiliya} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t("lilia")}, 2023</h2>
          <p className="card__text">{t("lilia about")}</p>
          <p className="card__size">120х80</p>
          <p className="card__price">75.000 ₽</p>
        </div>
      </div>

      <div className="card__big">
        <div className="card__pic_big unique-class">
          <ImageSliderBig
            slides={slidesLabirint}
            additionalClass="unique-class"
          />
        </div>
        <div className="card__description_big">
          <h2 className="card__title">{t("gold labirint")}, 2023</h2>
          <p className="card__text">{t("gold labirint about")}</p>
          <p className="card__size">100х70</p>
          <p className="card__price">50.000 ₽</p>
        </div>
      </div>
    </section>
  );
}

export default ArtCard;
