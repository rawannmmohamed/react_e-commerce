import React, { useEffect, useState } from "react";
import "./Slider.css";
import Card from "./Card";
import { useTranslation } from "react-i18next";
const Slider = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/slides.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="slider">
      <p>{t("ourShop")}</p>
      <ul className="slides">
        {data.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            price={card.price}
            image={card.image}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
