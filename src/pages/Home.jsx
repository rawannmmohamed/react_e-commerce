import React from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import "./Home.css";
const Home = () => {
  return (
    <main>
      <img
        src="/assets/top-view-desk-with-keyboard-drawing-pad.png"
        alt="background image"
        className="background-img"
      />
      <Nav />
      <div className="container">
        <h1>Be creative!</h1>
        <button className="explore">Explore more</button>
      </div>
      <p>OUR SHOP</p>
      <Slider />
    </main>
  );
};

export default Home;
