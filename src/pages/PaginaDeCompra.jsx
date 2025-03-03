import React from "react";
import { useLocation } from 'react-router-dom';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import FormProduto from "../components/forms/formproduto/form_produto";
import { BsHeart, BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import "../assets/styles/pagina_compra/style.css";

const PaginaDeCompra = () => {
    const { state } = useLocation();
    const productData = state || {};

    const handleShare = (platform) => {
        // Implement share functionality
        console.log(`Sharing on ${platform}`);
    };

    return (
        <div className="purchase-page">
            
            <main className="purchase-content">
                <div className="product-main">
                    <div className="product-header">
                        <h1 className="product-title">{productData.name || "Produto"}</h1>
                        <p className="product-category">Publicidade / Vídeo Promocional</p>
                    </div>
                    
                    <div className="product-gallery">
                        <img 
                            src={productData.image} 
                            alt={productData.name} 
                            className="main-image" 
                        />
                        <div className="product-stats">
                            <div className="rating">
                                ⭐ {productData.rating}
                            </div>
                            <div className="delivery-time">
                                🕒 {productData.deliveryTime}
                            </div>
                            <div className="sales">
                                🛒 {productData.sales} vendas
                            </div>
                        </div>
                    </div>

                    <div className="social-share">
                        <button className="like-button">
                            <BsHeart /> <span>0</span>
                        </button>
                        <div className="share-buttons">
                            <button onClick={() => handleShare('facebook')}>
                                <BsFacebook />
                            </button>
                            <button onClick={() => handleShare('twitter')}>
                                <BsTwitter />
                            </button>
                            <button onClick={() => handleShare('linkedin')}>
                                <BsLinkedin />
                            </button>
                            <button onClick={() => handleShare('whatsapp')}>
                                <BsWhatsapp />
                            </button>
                        </div>
                    </div>

                    <div className="product-description">
                        <h2>Descrição do Serviço</h2>
                        <div className="description-content">
                            <p>{productData.description}</p>
                        </div>
                    </div>
                </div>

                <aside className="product-form-container">
                    <FormProduto productData={productData} />
                </aside>
            </main>
            
        </div>
        
        
       
    );
};

export default PaginaDeCompra;