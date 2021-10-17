import React from "react";
import Dog from "./../../assets/banner-dog.svg";
import Cat from "./../../assets/banner-cat.svg";
import Care from "./../../assets/banner-care.svg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item">
          <a href="/">
            <img src={Dog} alt="productos para perro"></img>
          </a>
        </div>

        <div className="item">
          <a href="/">
            <img src={Cat} alt="productos para gato"></img>
          </a>
        </div>
        <div className="item">
          <a href="/">
            <img src={Care} alt="productos para gato"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
