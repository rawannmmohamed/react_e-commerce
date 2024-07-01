import React from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { useTranslation } from "react-i18next";
import "./Home.css";
const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Nav />
      <div className="container">
        <h1>{t('welcomeMessage')}</h1>
        <button className="explore">{t('exploreMore')}</button>
      </div>
      <Slider />
    </main>
  );
};

export default Home;
