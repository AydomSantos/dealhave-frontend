import React from "react";
import "../assets/styles/homePage/style.css";

import Header from "../components/header/header.jsx";
import Cards from "../components/cards/cards.jsx";
import Footer from "../components/footer/footer.jsx";
const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="section">
            <h2 className="section__destaques--titulo">
                Destaques <br />
                <div className="barra"></div>

            </h2>
            <div className="section--container--card">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </section>
        <section className="section">
            <h2 className="section__destaques--titulo">
            Mais Vendidos <br />
                <div className="barra"></div>

            </h2>
            <div className="section--container--card">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </section>
        <section className="section">
            <h2 className="section__destaques--titulo">
            Recomendado para você <br />
                <div className="barra"></div>

            </h2>
            <div className="section--container--card">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
