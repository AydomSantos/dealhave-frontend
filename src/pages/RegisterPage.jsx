import React from "react";
import FormRegister from "../components/forms/formRegister/form_register";
import "../../src/assets/styles/register_page/style.css"

const registerPage = () => {
    return (
        <div className="register-page">
            <FormRegister/>
        </div>
    );
}

export default registerPage;