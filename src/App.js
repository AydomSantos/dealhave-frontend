
import React from "react";
import { Route, Routes } from "react-router-dom";

// Page imports
import HomePage from "./pages/HomePage";
import CategoriasPage from "./pages/CategoriasPage";
import PaginaDeCompra from "./pages/PaginaDeCompra";

// Auth related pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PaginaReculperarSenha from "./pages/ReculperaSenha";

// Pagina de Avaliações 
import PaginaAvaliacoes from "./pages/Avaliacoes";

// Support pages
import FAQPage from "./pages/FAQPage";

// Styles
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/compra" element={<PaginaDeCompra />} />
        <Route path="/avaliacoes" element={<PaginaAvaliacoes/>}/>

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<PaginaReculperarSenha/>} />

        {/* Support routes */}
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </div>
  );
}

export default App;
