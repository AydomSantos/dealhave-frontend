
import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FAQPage from "./pages/FAQPage";
import CategoriasPage from "./pages/CategoriasPage";
import PaginaDeCompra from "./pages/PaginaDeCompra"; // Add this import
import { Route, Routes } from "react-router-dom";

import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/compra" element={<PaginaDeCompra />} /> {/* Add this route */}
      </Routes>
    </div>
  );
}

export default App;
