import React from "react";
import LoginForm from "../components/forms/formLogin/form_login";
import "../../src/assets/styles/login_page/style.css";

const loginPage = () => {
    return (
        <div className="login-page">
            <LoginForm/>
        </div>
    );
}

export default loginPage;