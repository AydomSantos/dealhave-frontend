import React from "react";

const produtoForm = () => {
    return (
        <form>
            <input type="text" placeholder="Nome do Produto" />
            <input type="number" placeholder="Preço do Produto" />
            <input type="number" placeholder="Quantidade em Estoque" />
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default produtoForm;