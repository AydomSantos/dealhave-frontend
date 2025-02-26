
import { useState, useEffect } from 'react';
import { Payment } from '@mercadopago/sdk-react';
import { createPaymentPreference } from '../../services/mercadoPagoService';

const PaymentBrick = ({ cartItems }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializePayment = async () => {
      try {
        const items = cartItems.map(item => ({
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity,
        }));

        const preference = await createPaymentPreference(items);
        setPreferenceId(preference.id);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    initializePayment();

    return () => {
      if (window.paymentBrickController) {
        window.paymentBrickController.unmount();
      }
    };
  }, [cartItems]);

  const initialization = {
    amount: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
    preferenceId: preferenceId,
  };

  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/process_payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Payment processing failed');
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const onError = async (error) => {
    console.error('Payment Brick Error:', error);
  };

  const onReady = async () => {
    console.log('Payment Brick is ready');
  };

  if (loading) return <div>Carregando método de pagamento...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div id="paymentBrick_container">
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
};

export default PaymentBrick;