import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.svg";
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo de huellitas"></img>
        </Link>
        <div className="menu-wrapper">
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/">Tienda</a>
              </li>
              <li>
                <a href="/">Citas</a>
              </li>
              <li>
                <Link to="/registration">Inicia Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
