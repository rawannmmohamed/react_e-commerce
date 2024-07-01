import React, { useEffect, useState } from "react";
import "./Slider.css";
import Card from "./Card";

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/slides.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="slider">
      <ul className="slides">
        {data.map((card, index) => (
          <Card key={index} name={card.name} price={card.price} image={card.image} />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
