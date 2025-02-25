// onde e aplicada a logica 

import { createPaymentPreference } from '../services/mercadoPagoService';

export const useMercadoPago = () => {
  const handlePayment = async (items) => {
    try {
      const preference = await createPaymentPreference(
        items.map(item => ({
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity,
        }))
      );
      
      window.location.href = preference.init_point;
    } catch (error) {
      console.error('Erro no pagamento:', error);
    }
  };

  return { handlePayment };
};