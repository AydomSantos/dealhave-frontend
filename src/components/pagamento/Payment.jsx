import React, { useState, useEffect } from 'react';
import { Payment, initMercadoPago } from '@mercadopago/sdk-react';


const MP_CONFIG = {
  PUBLIC_KEY:    '',
  ACCESS_TOKEN:  ''
};

const PaymentBrick = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configuração do Brick
  const initialization = {
    amount: 100,
    preferenceId: preferenceId,
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      prepaidCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const createPreference = async () => {
    try {
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MP_CONFIG.ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          items: [
            {
              title: "Produto Teste",
              unit_price: 100,
              quantity: 1
            }
          ],
          back_urls: {
            success: window.location.href,
            failure: window.location.href,
            pending: window.location.href
          },
          auto_return: "approved"
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.message);
      setPreferenceId(data.id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initMercadoPago(MP_CONFIG.PUBLIC_KEY);
    createPreference();
  }, []);

  
  const handleSubmit = async ({ formData }) => {
    console.log('Dados do pagamento:', formData);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 'approved' }), 2000);
    });
  };

  const handleError = (error) => {
    console.error('Erro no Brick:', error);
    setError(error.message);
  };

  const handleReady = () => {
    console.log('Brick pronto');
  };

  return (
    <div className="payment-container">
      {loading && <div>Carregando...</div>}
      {error && <div className="error">Erro: {error}</div>}

      {preferenceId && (
        <div id="paymentBrick_container">
          <Payment
            initialization={initialization}
            customization={customization}
            onSubmit={handleSubmit}
            onReady={handleReady}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentBrick;