import React from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        {/* Seção de Navegação */}
        <div className="footer__section">
          <h2 className="footer__title">Navegação</h2>
          <ul className="footer__links">
            <li><a href="/categorias" className="footer__link">Categorias</a></li>
            <li><a href="/faq" className="footer__link">FAQ</a></li>
          </ul>
        </div>

        {/* Seção de Contato */}
        <div className="footer__section">
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__links">
            <li>
              <BsTelephoneFill aria-hidden="true" /> 
              <span>(11) 9999-9999</span>
            </li>
            <li>
              <BsEnvelopeFill aria-hidden="true" /> 
              <span>Contato@gmail.com</span>
            </li>
            <li>
              <BsGeoAltFill aria-hidden="true" />
              <span>Arapiraca AL</span>
            </li>
          </ul>
        </div>

        {/* Seção de Redes Sociais */}
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
          &copy; {currentYear} Empresa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;