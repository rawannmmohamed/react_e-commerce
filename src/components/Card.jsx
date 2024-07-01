import React from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";

const Card = (slide) => {
  const { t } = useTranslation();

  return (
    <div className="card" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="description">
        <div className="info">
          <span className="title">
            {" "}
            {t("name")} {slide.index + 1}
          </span>
          <span className="price">{slide.price}</span>
        </div>
        <button className="card-button">{t("view")}</button>
      </div>
    </div>
  );
};

export default Card;
