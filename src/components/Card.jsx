import React from "react";
import "./Card.css";
const Card = (slide) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="description">
        <div className="info">
          <span className="title">{slide.name}</span>
          <span className="price">{slide.price}</span>
        </div>
        <button className="card-button">VIEW</button>
      </div>
    </div>
  );
};

export default Card;
