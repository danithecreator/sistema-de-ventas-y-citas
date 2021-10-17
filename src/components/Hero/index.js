import React from "react";
import HeroDog from "./../../assets/hero.jpg";
import Huellitas from "./../../assets/huellitas.svg";
import "./styles.scss";
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="wrap">
        <div className="left-container">
          <h1>Bienvenidos a Huellitas</h1>
          <h2>20% de descuento en tu primera compra</h2>
          <button className="hero-button">Compra Aqui</button>
        </div>
        <div className="right-container">
          <img src={HeroDog} alt="Dogs"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
