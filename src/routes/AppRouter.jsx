import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FAQPage from "../pages/FAQPage"; 
import CategoriasPage from "../pages/CategoriasPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path='/faq' element={<FAQPage />} /> 
        <Route path='/categorias' element={<CategoriasPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;