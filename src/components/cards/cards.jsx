import React from "react";
import { useNavigate } from 'react-router-dom';
import { BsStarFill, BsClock, BsCart } from "react-icons/bs";
import "./cards.css";
import cardImg from "./img/img.jpg";

const Card = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const productData = {
      id: 1,
      name: "Galaxy S8",
      image: cardImg,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      rating: "5,00",
      deliveryTime: "2 d",
      sales: "1900",
      category: "Publicidade / Vídeo Promocional"
    };

    navigate('/compra', { 
      state: productData
    });
  };

  return (
    <div className="card__container" onClick={handleClick}>
      <div className="card__box">
        <div className="card__box--img">
          <img src={cardImg} alt="imagem do produto" />
        </div>
        <div className="card__box--conteudo">
          <h2 className="card__box--conteudo--titulo">Galaxy S8</h2>
          <p className="card__box--conteudo--descricao">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <hr />
        </div>
        <div className="card__box--footer">
          <div className="card__box--footer--nota">
            <BsStarFill className="star-icon" />
            <span>5,00</span>
          </div>
          <div className="card__box--footer--tempo">
            <div>
              <BsClock className="clock-icon" />
              <span>2 d</span>
            </div>
            <div  style={{ cursor: 'pointer' }}>
              <BsCart className="cart-icon" />
              <span>1900</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;