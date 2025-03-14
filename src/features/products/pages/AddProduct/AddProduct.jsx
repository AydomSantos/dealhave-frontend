import React from 'react';
import AuthHeader from '../../../../components/authHeader/AuthHeader';
import ProductForm from '../../components/ProductForm/ProductForm';
import './AddProduct.css';

const AddProduct = () => {
  return (
    <>
      <AuthHeader />
      <div className="add-product-container">
        <div className="add-product-card">
          <h2 className="add-product-title">
            <span className="icon-plus">+</span> Criar novo Produto
          </h2>
          <ProductForm />
        </div>
      </div>
    </>
  );
};

export default AddProduct;