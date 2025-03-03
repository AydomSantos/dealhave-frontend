import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Card from "../components/cards/cards";
import "../assets/styles/categorias/style.css";

const CategoriaPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <div className="categoria-page">
            <Header/>
            <main className="categoria-content">
                <div className="categoria-header">
                    <h1>Categorias de Produtos</h1>
                    <div className="categoria-filter">
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">Filtrar por Categoria</option>
                            <option value="electronics">Eletrônicos</option>
                            <option value="fashion">Moda</option>
                            <option value="home">Casa</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {[...Array(8)].map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CategoriaPage;