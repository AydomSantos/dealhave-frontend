import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement password recovery logic
      setMessage('Password recovery instructions sent to your email');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError('Failed to process password recovery request');
    }
  };

  return (
    <div className="recover-password-container">
      <h2>Recover Password</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Recovery Instructions</button>
      </form>
    </div>
  );
};

export default RecuperarSenha;