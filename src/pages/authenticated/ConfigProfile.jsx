import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AuthHeader from '../../components/authHeader/AuthHeader';
import { BsPerson } from 'react-icons/bs';
import './ConfigProfile.css';

const ConfigProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    lastName: '',
    cpf: '',
    address: '',
    complement: '',
    city: '',
    cep: '',
    addressType: 'Casa',
    neighborhood: '',
    state: '',
    phone: '',
    birthDate: '',
    description: '',
    email: user?.email || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update profile logic here
  };

  return (
    <>
      <AuthHeader />
      <div className="config-container">
        <div className="config-card">
          <div className="config-header">
            <BsPerson className="profile-icon" />
            <h2>Meus Dados</h2>
          </div>

          <form onSubmit={handleSubmit} className="config-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Sobrenome:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Endereço:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Complemento:</label>
                <input
                  type="text"
                  name="complement"
                  value={formData.complement}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cidade:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>CEP:</label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tipo de Endereço:</label>
                <select name="addressType" value={formData.addressType} onChange={handleChange}>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Comercial">Comercial</option>
                </select>
              </div>
              <div className="form-group">
                <label>Bairro:</label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Estado:</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Telefone Celular:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Data de Nascimento:</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Descrição do Perfil:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-group full-width">
              <label>Endereço de e-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="save-button">
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfigProfile;