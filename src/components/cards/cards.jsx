import React from "react";
import { BsStarFill, BsClock, BsCart } from "react-icons/bs";
import "./cards.css";

import cardImg from "./img/img.jpg";

const Card = () => {
  return (
    <div className="card__container">
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
            <div>
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
