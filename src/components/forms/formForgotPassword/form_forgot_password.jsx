import React, { useState } from "react";
import "../../../assets/styles/forgot_password/style.css";
import "../formForgotPassword/form_forgot_password.css";
import imgForgot from "../../../assets/images/Logo/logo_nova.png";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
  };

  return (
    <div className="forgot_center">
      <div className="forgot-container">
        <div className="forgot-form-section">
          <h2>Esqueceu sua senha?</h2>
          <p className="forgot-description">
            Digite seu e-mail para redefinir sua senha
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="reset-button">
              Enviar link de recuperação
            </button>
            <a href="/login" className="back-to-login">
              Voltar para o login
            </a>
          </form>
        </div>
        <div className="forgot-image-section">
          <img src={imgForgot} alt="Deal Haven Logo" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
