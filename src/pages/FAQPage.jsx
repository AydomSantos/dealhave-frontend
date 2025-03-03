import React from "react";
import Header from "../components/header/header.jsx";
import DropdownForm from "../components/forms/formDropdow/form_dropdow.jsx";
import Footer from "../components/footer/footer.jsx";
import "../assets/styles/pagina_faq/style.css";

const faqPage = () => {
  return (
    <>
      <Header />
      <DropdownForm />
      <Footer />
    </>
  );
};

export default faqPage;
