import React from "react";
import { Link } from "react-router-dom";
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
  BsFacebook,          
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import "./footer.css";

const AuthFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <div className="footer__section">
          <h2 className="footer__title">Navegação</h2>
          <ul className="footer__links">
            <li><Link to="/home" className="footer__link">Home</Link></li>
            <li><Link to="/auth/categorias" className="footer__link">Categorias</Link></li>
            <li><Link to="/profile/products" className="footer__link">Meus Produtos</Link></li>
            <li><Link to="/profile/products/new" className="footer__link">Criar Anúncio</Link></li>
            <li><Link to="/profile/config" className="footer__link">Configurações</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__links">
            <li>
              <BsTelephoneFill aria-hidden="true" /> 
              <span>(82) 9999-9999</span>
            </li>
            <li>
              <BsEnvelopeFill aria-hidden="true" /> 
              <span>dealhaven@gmail.com</span>
            </li>
            <li>
              <BsGeoAltFill aria-hidden="true" />
              <span>Arapiraca AL</span>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h2 className="footer__title">Redes Sociais</h2>
          <div className="footer__social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook aria-label="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram aria-label="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin aria-label="LinkedIn" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <BsYoutube aria-label="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {currentYear} Deal Haven. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default AuthFooter;