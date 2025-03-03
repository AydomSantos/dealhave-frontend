import React, { useState } from "react";
import "./form_register.css";
import imgRegister from "../../../assets/images/Logo/Logo.png";

const FormRegister = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        dataNascimento: '',
        termos: false
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
        console.log('Form submitted:', formData);
    };

    return (
        <div className="register-container">
            <div className="register-form-section">
                <h2>Crie sua conta gratuitamente!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome Completo"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirmar Senha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            id="dataNascimento"
                            name="dataNascimento"
                            placeholder="Data de Nascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group terms">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="termos"
                                checked={formData.termos}
                                onChange={handleChange}
                                required
                            />
                            <span>Aceito os <a href="/terms">Termos e Condições</a></span>
                        </label>
                    </div>
                    <button type="submit" className="register-button">
                        Criar Conta
                    </button>
                </form>
            </div>
            <div className="register-image-section">
                <img src={imgRegister} alt="Deal Haven Logo" />
            </div>
        </div>
    );
};

export default FormRegister;