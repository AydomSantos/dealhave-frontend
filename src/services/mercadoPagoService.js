import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configuração inicial
const configureMercadoPago = (accessToken) => {
  return new MercadoPagoConfig({
    accessToken: accessToken || process.env.VITE_MERCADO_PAGO_ACCESS_TOKEN
  });
};

// Criar preferência de pagamento
export const createPaymentPreference = async (items, config) => {
  const client = new MercadoPagoConfig(config);
  const preference = new Preference(client);
  
  try {
    return await preference.create({
      body: {
        items,
        back_urls: {
          success: `${import.meta.env.VITE_BASE_URL}/payment-callback`,
          failure: `${import.meta.env.VITE_BASE_URL}/payment-callback`,
          pending: `${import.meta.env.VITE_BASE_URL}/payment-callback`
        },
        auto_return: "approved"
      }
    });
  } catch (error) {
    throw new Error('Erro ao criar preferência de pagamento: ' + error.message);
  }
};