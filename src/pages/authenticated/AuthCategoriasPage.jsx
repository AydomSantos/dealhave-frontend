import React, { useState } from 'react';
import AuthHeader from '../../components/authHeader/AuthHeader';
import Cards from '../../components/cards/cards';
import AuthFooter from '../../components/footer/AuthFooter';
import { BsFilter } from 'react-icons/bs';
import '../../assets/styles/categoriasPage/style.css';

const AuthCategoriasPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <AuthHeader />
      <main className="main">
        <div className="category-header">
          <h2>Categorias de Produtos</h2>
          <div className="filter-container">
            <button 
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
            >
              <BsFilter /> Filtros
            </button>
            {showFilters && (
              <div className="filter-dropdown">
                <label>
                  <input type="checkbox" /> Menor Preço
                </label>
                <label>
                  <input type="checkbox" /> Maior Avaliação
                </label>
                <label>
                  <input type="checkbox" /> Mais Vendidos
                </label>
              </div>
            )}
          </div>
        </div>

        <section className="section">
          <h2 className="section__destaques--titulo">
            Eletrônicos <br />
            <div className="barra"></div>
          </h2>
          <div className="section--container--card">
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
          </div>
        </section>

        <section className="section">
          <h2 className="section__destaques--titulo">
            Roupas <br />
            <div className="barra"></div>
          </h2>
          <div className="section--container--card">
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
          </div>
        </section>

        <section className="section">
          <h2 className="section__destaques--titulo">
            Acessórios <br />
            <div className="barra"></div>
          </h2>
          <div className="section--container--card">
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
            <Cards price="R$ 80,00" />
          </div>
        </section>
      </main>
      <AuthFooter />
    </div>
  );
};

export default AuthCategoriasPage;