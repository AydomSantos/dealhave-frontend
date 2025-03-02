import React, { useState, useEffect } from 'react';
import { createPaymentPreference } from '../../services/mercadoPagoService';
import './Payment.css';

const PaymentBrick = ({ productData = {
  title: "Produto Teste",
  unit_price: 100,
  quantity: 1
} }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const initializePayment = async () => {
      try {
        const preference = await createPaymentPreference(productData);
        setPaymentInfo(preference);
      } catch (err) {
        setError(err.message);
        console.error('Erro na inicialização:', err);
      } finally {
        setLoading(false);
      }
    };

    initializePayment();
  }, [productData]);

  if (loading) {
    return <div className="payment-loading">Gerando QR Code do PIX...</div>;
  }

  if (error) {
    return (
      <div className="payment-error">
        <p>Erro: {error}</p>
        <button onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-details">
        <h2>Pagamento via PIX</h2>
        <div className="product-info">
          <p><strong>Produto:</strong> {productData.title}</p>
          <p><strong>Valor:</strong> R$ {productData.unit_price.toFixed(2)}</p>
          <p><strong>Quantidade:</strong> {productData.quantity}</p>
          <p><strong>Total:</strong> R$ {(productData.unit_price * productData.quantity).toFixed(2)}</p>
        </div>
        
        {paymentInfo && (
          <div className="pix-info">
            <div className="qr-code-container">
              {paymentInfo.qr_code && (
                <>
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentInfo.qr_code)}`}
                    alt="QR Code PIX"
                    className="qr-code-image"
                  />
                  <button 
                    className="copy-button"
                    onClick={() => {
                      navigator.clipboard.writeText(paymentInfo.qr_code);
                      alert('Código PIX copiado!');
                    }}
                  >
                    Copiar código PIX
                  </button>
                </>
              )}
            </div>
            
            {paymentInfo.ticket_url && (
              <div className="ticket-info">
                <a 
                  href={paymentInfo.ticket_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ticket-button"
                >
                  Ver comprovante
                </a>
              </div>
            )}
            
            <div className="payment-status">
              <p><strong>Status do pagamento:</strong> {paymentInfo.status}</p>
              <p className="payment-id">ID do pagamento: {paymentInfo.id}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentBrick;
