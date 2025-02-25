import { useMercadoPago } from '../../hooks/useMercadoPago';

const PaymentButton = ({ cartItems }) => {
  const { handlePayment } = useMercadoPago();
  return (
    <button 
      onClick={() => handlePayment(cartItems)}
      className="checkout-button"
    >
      Pagar com Mercado Pago
    </button>
  );
};

export default PaymentButton;