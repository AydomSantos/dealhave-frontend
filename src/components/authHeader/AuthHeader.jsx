import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/userSlice';
import { BsCart3, BsBell, BsPersonCircle } from 'react-icons/bs';
import logo from "../header/img/Logo.png";
import "./authHeader.css";

const AuthHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const cartCount = useSelector((state) => state.cart?.items?.length || 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="auth-header">
      <div className="header-left">
        <Link to="/home" className="header__logo">
          <img src={logo} alt="Logo" className="header__logo-img"/>
        </Link>
      </div>

      <div className="header-center">
        <nav className="nav-menu">
          {/* Update these links to authenticated versions */}
          <Link to="/auth/categorias" className="nav__link">Categorias</Link>
          <Link to="/profile/products/new" className="nav__link">Anunciar</Link>
          <Link to="/profile/products" className="nav__link">Meus Anúncios</Link>
        </nav>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <Link to="/cart" className="action-icon">
            <BsCart3 />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          
          <Link to="/notifications" className="action-icon">
            <BsBell />
          </Link>

          <div className="user-menu">
            <BsPersonCircle className="user-icon" />
            <span className="user-name">{user?.name}</span>
            
            <div className="dropdown-menu">
              <Link to="/profile/config">Configurações</Link>
              <Link to="/profile/products">Meus Produtos</Link>
              <Link to="/profile/favorites">Favoritos</Link>
              <button onClick={handleLogout}>Sair</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;