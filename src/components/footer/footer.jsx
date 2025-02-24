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
      <div className="footer__content container">
        {/* Seção de Navegação */}
        <div className="footer__section">
          <h2 className="footer__title">Navegação</h2>
          <nav aria-label="Navegação secundária">
            <ul className="footer__links">
              <li>
                <a href="/categorias" className="footer__link">
                  Categorias
                </a>
              </li>
              <li>
                <a href="/faq" className="footer__link">
                  FAQ
                </a>
              </li>
              <li>
              <a href="/avaliacao" className="footer__link">
                  Avaliações
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Seção de Contato */}
        <div className="footer__section">
          <h2 className="footer__title">Contato</h2>
          <address className="footer__contact">
            <p>
              <BsTelephoneFill aria-hidden="true" /> 
              <a href="tel:+551199999999" className="footer__link">
                (11) 9999-9999
              </a>
            </p>
            <p>
              <BsEnvelopeFill aria-hidden="true" /> 
              <a href="mailto:contato@empresa.com" className="footer__link">
                contato@empresa.com
              </a>
            </p>
            <p>
              <BsGeoAltFill aria-hidden="true" />
              São Paulo, SP
            </p>
          </address>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="footer__section">
          <h2 className="footer__title">Redes Sociais</h2>
          <nav aria-label="Redes sociais">
            <div className="footer__social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <BsFacebook aria-label="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <BsInstagram aria-label="Instagram" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <BsLinkedin aria-label="LinkedIn" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <BsYoutube aria-label="YouTube" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {currentYear} Empresa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;