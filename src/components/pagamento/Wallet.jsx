import React, { useState, useEffect } from 'react';
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react';

const MP_CONFIG = {
  PUBLIC_KEY: 'TEST-7de81d0f-6a49-4181-9115-6eab1b2015b4',
  ACCESS_TOKEN: 'TEST-2916100788662548-022516-ccd3d61dffeee2fc2d61f60f2ed80ad7-1309959741'
};

const PaymentButton = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBrick, setShowBrick] = useState(false);

  // Configuração inicial do Brick
  const initialization = {
    preferenceId: preferenceId,
  };

  const customization = {
    texts: {
      valueProp: 'smart_option',
    },
  };

  // Criar preferência de pagamento
  const createPreference = async () => {
    setLoading(true);
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
          ]
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

  const handlePaymentSubmit = async (formData) => {
    try {
      console.log('Dados do pagamento:', formData);
      // Lógica para processar o pagamento
      return { status: 'approved' };
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    initMercadoPago(MP_CONFIG.PUBLIC_KEY);
  }, []);

  return (
    <div className="payment-container">
      <button 
        onClick={() => {
          setShowBrick(true);
          createPreference();
        }}
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Pagar com Mercado Pago'}
      </button>

      {error && <div className="error-message">{error}</div>}

      {showBrick && preferenceId && (
        <Wallet
          initialization={initialization}
          customization={customization}
          onSubmit={handlePaymentSubmit}
          onReady={() => console.log('Wallet Brick pronto!')}
          onError={(error) => setError(error.message)}
        />
      )}
    </div>
  );
};

export default PaymentButton;