import React, { useState } from 'react';
import AuthHeader from '../../components/authHeader/AuthHeader';
import { Link } from 'react-router-dom';
import { BsBox, BsClock, BsCheckCircle, BsSearch, BsGear } from 'react-icons/bs';
import './MyProducts.css';

const MyProducts = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <AuthHeader />
      <div className="products-container">
        <div className="products-sidebar">
          <Link to="/profile/products" className={`sidebar-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
            <BsBox /> Meus Projetos <span className="count">0</span>
          </Link>
        </div>

        <div className="products-content">
          <div className="content-header">
            <h2>Meus projetos</h2>
          </div>

          <div className="empty-state">
            <p>Não há projetos cadastrados ainda.</p>
            <Link to="/profile/products/new" className="add-product-button">
              Criar Novo Projeto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;