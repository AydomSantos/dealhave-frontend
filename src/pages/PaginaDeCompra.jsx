import React from "react";
import { useLocation } from "react-router-dom";
import FormProduto from "../components/forms/formproduto/form_produto";
import {
  BsHeart,
  BsStarFill,
  BsFacebook,
  BsTwitter,
  BsClock,
  BsLinkedin,
  BsWhatsapp,
  BsCartCheck
} from "react-icons/bs";
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
              <div className="stat-item">
                <BsStarFill className="icon star-icon" />
                <div className="stat-content">
                  <span className="stat-value">{productData.rating}</span>
                  <span className="stat-label">Avaliação</span>
                </div>
              </div>

              <div className="stat-separator" />

              <div className="stat-item">
                <BsClock className="icon clock-icon" />
                <div className="stat-content">
                  <span className="stat-value">{productData.deliveryTime}</span>
                  <span className="stat-label">Entrega</span>
                </div>
              </div>

              <div className="stat-separator" />

              <div className="stat-item">
                <BsCartCheck className="icon cart-icon" />
                <div className="stat-content">
                  <span className="stat-value">{productData.sales}</span>
                  <span className="stat-label">Vendas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="social-share">
            <button className="like-button">
              <BsHeart /> <span>0</span>
            </button>
            <div className="share-buttons">
              <button onClick={() => handleShare("facebook")}>
                <BsFacebook />
              </button>
              <button onClick={() => handleShare("twitter")}>
                <BsTwitter />
              </button>
              <button onClick={() => handleShare("linkedin")}>
                <BsLinkedin />
              </button>
              <button onClick={() => handleShare("whatsapp")}>
                <BsWhatsapp />
              </button>
            </div>
          </div>

          <div className="product-description">
            <h2>Descrição do Serviço</h2>
            <div className="description-content">
              <p>
                {/* {productData.description} */} Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Iusto numquam suscipit iste vero
                quisquam, impedit aliquam? Odio natus corporis minus omnis et
                laborum consectetur accusamus, praesentium facilis soluta
                voluptatem sint perspiciatis, architecto libero minima? Tempore
                quos, quidem possimus iure aliquid ut labore nobis
                necessitatibus laboriosam sint hic eligendi? At, consequuntur
                fuga! Quas sunt voluptas harum iure iusto blanditiis corporis!
                Eligendi, veritatis dolore suscipit tenetur, qui fugiat
                accusamus eos inventore, labore ipsa voluptate nulla iste
                quisquam. Dolore molestias modi facere delectus eos praesentium
                tenetur! Blanditiis nesciunt praesentium perspiciatis ad,
                exercitationem animi aliquam sit aperiam! Pariatur minima
                architecto nostrum cumque? Est voluptatibus delectus accusantium
                nihil incidunt deserunt, repellendus aspernatur qui libero?
                Magnam laudantium eius non ab recusandae eveniet ducimus
                similique sequi totam, veritatis voluptate id assumenda aliquam,
                dolor deserunt quos nulla officia quis commodi? Quam
                reprehenderit, qui voluptas odio accusantium totam! Inventore
                voluptatem iure consectetur. Ipsam nemo voluptatum asperiores
                quos nesciunt a, sapiente accusamus perspiciatis obcaecati
                facere qui cum impedit earum unde architecto numquam ipsa.
                Explicabo quibusdam asperiores rerum repellat temporibus illo
                veritatis ea est ipsam autem aperiam, maxime hic optio
                laudantium, dolor beatae aliquam distinctio ex aspernatur
                reprehenderit facere quis? Commodi, provident itaque vel
                obcaecati dignissimos accusantium qui amet. Cum, quo!
              </p>
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
