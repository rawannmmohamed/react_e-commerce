import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="description">
        <div className="info">
          <span className="title">camera</span>
          <span className="price">$97.70</span>
        </div>
        <button className="card-button">VIEW</button>
      </div>
    </div>
  );
};

export default Card;
