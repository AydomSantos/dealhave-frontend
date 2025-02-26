import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: import.meta.env.VITE_MERCADO_PAGO_ACCESS_TOKEN
});

// Exportação CORRETA da função
export const createPaymentPreference = async (items) => {
  try {
    const preference = new Preference(client);
    return await preference.create({
      body: {
        items,
        purpose: 'wallet_purchase',
        back_urls: {
          success: `${import.meta.env.VITE_BASE_URL}/payment-callback`,
          failure: `${import.meta.env.VITE_BASE_URL}/payment-callback`,
          pending: `${import.meta.env.VITE_BASE_URL}/payment-callback`
        },
        auto_return: "approved"
      }
    });
  } catch (error) {
    throw new Error('Erro ao criar preferência: ' + error.message);
  }
};