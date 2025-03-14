
import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Page imports
import HomePage from "./pages/HomePage";
import CategoriasPage from "./pages/CategoriasPage";
import PaginaDeCompra from "./pages/PaginaDeCompra";
import CartPage from './pages/cart/CartPage';


// Auth related pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import PaginaReculperarSenha from "./pages/auth/RecuperarSenha";

// Authenticated pages
import AuthHomePage from "./pages/authenticated/AuthHomePage";
import ConfigProfile from "./pages/authenticated/ConfigProfile";
import MyProducts from "./pages/authenticated/MyProducts";
import AddProduct from "./pages/products/AddProduct";
import AuthCategoriasPage from "./pages/authenticated/AuthCategoriasPage";

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
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/compra" element={<PaginaDeCompra />} />
        <Route path="/avaliacoes" element={<PaginaAvaliacoes/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<PaginaReculperarSenha/>} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cart" element={<CartPage />} />
        

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <AuthHomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/config"
          element={
            <PrivateRoute>
              <ConfigProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/products"
          element={
            <PrivateRoute>
              <MyProducts />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/products/new"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/auth/categorias"
          element={
            <PrivateRoute>
              <AuthCategoriasPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
