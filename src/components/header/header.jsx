import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img 
          src={logo} 
          alt="Logo" 
          className="header__logo-img"
        />
      </Link>

      <nav className="nav">
        <Link to="/faq" className="nav__link"> 
          FAQ
        </Link>
        <Link to="/categorias" className="nav__link">
          Categorias de produtos
        </Link>
        <Link to="/avaliacoes" className="nav__link">
          Avaliações
        </Link>
      </nav>

      <div className="buttons_container">
        <Link to="/login" className="nav__btn--login btn">
          Login
        </Link>
        <Link to="/register" className="nav__btn--register btn">
          Registrar
        </Link>
      </div>
    </header>
  );
};

export default Header;