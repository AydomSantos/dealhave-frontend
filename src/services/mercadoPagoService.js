const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3333';

export const createPaymentPreference = async (productData) => {
  try {
    const paymentData = {
      amount: productData.unit_price * productData.quantity,
      description: productData.title,
      paymentMethodId: 'pix', // Método padrão como PIX
      payerEmail: 'comprador@teste.com' // Email do comprador (deve vir do formulário)
    };

    const response = await fetch(`${API_URL}/process-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Erro na criação do pagamento: ${response.status}`);
    }

    const data = await response.json();
    return {
      id: data.payment_id,
      status: data.status,
      qr_code: data.qr_code,
      ticket_url: data.ticket_url
    };
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    throw error;
  }
};

// Não precisamos mais do processPayment pois estamos fazendo tudo em uma única chamada
export const processPayment = async (paymentData, preferenceId) => {
  // Mantido para compatibilidade, mas não será usado
  console.warn('processPayment não é mais necessário');
  return paymentData;
}; 