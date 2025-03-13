import React, { useState } from 'react';
import AuthHeader from '../../components/authHeader/AuthHeader';
import { BsImage, BsLink } from 'react-icons/bs';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    category: '',
    description: '',
    instructions: '',
    tags: '',
    images: [],
    videoUrl: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct({
      ...product,
      images: [...product.images, ...files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your product submission logic here
  };

  return (
    <>
      <AuthHeader />
      <div className="add-product-container">
        <div className="add-product-card">
          <h2 className="add-product-title">
            <span className="icon-plus">+</span> Criar novo Produto
          </h2>
          
          <form onSubmit={handleSubmit} className="add-product-form">
            <div className="form-group">
              <label>Título do Produto</label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                placeholder="Digite um título atraente para seu produto"
                required
              />
            </div>

            <div className="form-group">
              <label>Categoria</label>
              <select name="category" value={product.category} onChange={handleChange} required>
                <option value="">Selecione uma Categoria</option>
                <option value="electronics">Eletrônicos</option>
                <option value="clothing">Roupas</option>
                <option value="books">Livros</option>
                <option value="home">Casa</option>
              </select>
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Descreva seu produto detalhadamente"
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label>Instruções de Compra</label>
              <textarea
                name="instructions"
                value={product.instructions}
                onChange={handleChange}
                placeholder="Adicione instruções importantes para o comprador"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={product.tags}
                onChange={handleChange}
                placeholder="Adicione tags separadas por vírgula"
              />
            </div>

            <div className="form-group">
              <label>Preço (R$)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>

            <div className="media-section">
              <div className="image-upload-container">
                <label className="image-upload-label">
                  <BsImage className="upload-icon" />
                  <span>Adicionar Imagens</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden-input"
                  />
                </label>
                <div className="image-preview">
                  {product.images.map((img, index) => (
                    <div key={index} className="preview-item">
                      {img.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="video-link-container">
                <label>
                  <BsLink className="link-icon" />
                  Link do Vídeo (YouTube)
                </label>
                <input
                  type="url"
                  name="videoUrl"
                  value={product.videoUrl}
                  onChange={handleChange}
                  placeholder="https://youtube.com/..."
                />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Criar Produto
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;