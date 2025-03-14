import "./header.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/userSlice';
import logo from "./img/Logo.png";
import CartIcon from "./CartIcon";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

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
        <CartIcon />
      </nav>

      <div className="buttons_container">
        {isAuthenticated ? (
          <>
            <span className="nav__user-name">Olá, {user?.name}</span>
            <button onClick={handleLogout} className="nav__btn--login btn">
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav__btn--login btn">
              Login
            </Link>
            <Link to="/register" className="nav__btn--register btn">
              Registrar
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;