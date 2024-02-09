import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import ImageSliderBig from "../ImageSlider/ImageSliderBig";
import { useTranslation } from 'react-i18next';

function ArtCard() {
  const { t } = useTranslation();
  const slidesTigor = [
    { url: "https://i.ibb.co/L6Qmz4T/tigor.png" },
    { url: "https://i.ibb.co/pn3FbBw/tigor-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesPion = [
    { url: "https://i.ibb.co/RvKBz92/pion.png" },
    { url: "https://i.ibb.co/sywQLKt/pion-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesMama = [
    { url: "https://i.ibb.co/MnsY0Zm/mam.png" },
    { url: "https://i.ibb.co/KjrF9pW/mama-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesOrel = [
    { url: "https://i.ibb.co/S3WwgG2/orel.png" },
    { url: "https://i.ibb.co/SrhPjmm/orel-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesLev = [
    { url: "https://i.ibb.co/d6Vj5HK/lev.png" },
    { url: "https://i.ibb.co/KqjTcTm/tigor-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesGoldOrel = [
    { url: "https://i.ibb.co/8Dsn891/goldorel.png" },
    { url: "https://i.ibb.co/KsS4FLF/goldorel-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesButterfly = [
    { url: "https://i.ibb.co/Hng4XNj/batterfly.png" },
    { url: "https://i.ibb.co/yP0PF02/batterfly-interier.png" },
    { url: "https://i.ibb.co/z7RD6Vj/big-price.png" },
  ];

  const slidesGoldTigr = [
    { url: "https://i.ibb.co/mRS0Y7D/goldtigr.png" },
    { url: "https://i.ibb.co/vJmFHzk/goldtigor-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesSnake = [
    { url: "https://i.ibb.co/1s9Qv8k/shake.png" },
    { url: "https://i.ibb.co/PCwT4kL/snake-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesLilia = [
    { url: "https://i.ibb.co/h1zQS1P/lilia.png" },
    { url: "https://i.ibb.co/TrP1cWc/lilia-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesLabirint = [
    { url: "https://i.ibb.co/yN52c4d/labirint.png" },
    { url: "https://i.ibb.co/5nQBHNY/labirint-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  const slidesIris = [
    { url: "https://i.ibb.co/zSW4b5D/iris.png" },
    { url: "https://i.ibb.co/dbMzqpR/iris-interier.png" },
    { url: "https://i.ibb.co/z7RD6Vj/big-price.png" },
  ];

  const slidesZhuk = [
    { url: "https://i.ibb.co/sPZdkHp/zhuk.png" },
    { url: "https://i.ibb.co/9sfZfLL/zhuk-interier.png" },
    { url: "https://i.ibb.co/c8K8Ktq/tigor-price.png" },
  ];

  return (
    <section className="art-container">
      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesTigor} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('tigr')}, 2023</h2>
          <p className="card__text">
          {t('tigr about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesPion} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('pion')}, 2023</h2>
          <p className="card__text">
          {t('pion about')}
          </p>
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
          <h2 className="card__title">{t('mama')}, 2023</h2>
          <p className="card__text">
          {t('mama about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">75.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesOrel} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('orel')}, 2023</h2>
          <p className="card__text">
          {t('orel about')}
          </p>
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
          <h2 className="card__title">{t('lev')}, 2023</h2>
          <p className="card__text">
          {t('lev about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesGoldOrel} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('gold orel')}, 2023</h2>
          <p className="card__text">
          {t('gold orel about')}
          </p>
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
          <h2 className="card__title">{t('butterfly')}, 2023</h2>
          <p className="card__text">
          {t('butterfly about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>
      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesGoldTigr} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('gold tigr')}, 2023</h2>
          <p className="card__text">{t('gold tigr about')}</p>
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
          <h2 className="card__title">{t('snake')}, 2023</h2>
          <p className="card__text">
          {t('snake about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">70.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesLilia} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('lilia')}, 2023</h2>
          <p className="card__text">
          {t('lilia about')}
          </p>
          <p className="card__size">120х80</p>
          <p className="card__price">75.000 ₽</p>
        </div>
      </div>

      <div className="card">
        <div className="card__pic">
          <div className="card__image">
            <ImageSlider slides={slidesLabirint} />
          </div>
        </div>
        <div className="card__description">
          <h2 className="card__title">{t('gold labirint')}, 2023</h2>
          <p className="card__text">
          {t('gold labirint about')}
          </p>
          <p className="card__size">100х70</p>
          <p className="card__price">50.000 ₽</p>
        </div>
      </div>

      <div className="card__big">
        <div className="card__pic_big">
          <div className="card__image_big">
            <ImageSliderBig slides={slidesIris} />
          </div>
        </div>
        <div className="card__description_big">
          <h2 className="card__title">{t('iris')}, 2023</h2>
          <p className="card__text">
          {t('iris about')}
          </p>
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
          <h2 className="card__title">{t('zhuk')}, 2023</h2>
          <p className="card__text">{t('zhuk about')}</p>
          <p className="card__size">100х70</p>
          <p className="card__price">50.000 ₽</p>
        </div>
      </div>
    </section>
  );
}

export default ArtCard;
