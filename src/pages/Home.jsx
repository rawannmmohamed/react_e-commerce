import React from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import "./Home.css";
const Home = () => {
  return (
    <main>
      <Nav />
      <div className="container">
        <h1>Be creative!</h1>
        <button className="explore">Explore more</button>
      </div>
      <Slider />
    </main>
  );
};

export default Home;
