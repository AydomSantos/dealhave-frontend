import React, { useState } from "react";
import "./form_login.css";
import imgLogin from "../../../assets/images/Logo/logo_nova.png";

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-form-section">
                <h2>Bem-vindo(a) de volta!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-options">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            Lembrar de mim
                        </label>
                        <a href="/forgot-password" className="forgot-password">
                            Esqueceu sua senha?
                        </a>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <button type="button" className="continue-button btn-register">
                        Register
                    </button>
                </form>
            </div>
            <div className="login-image-section">
                <img src={imgLogin} alt="Deal Haven Logo" />
            </div>
        </div>
    );
};

export default FormLogin;

