import { useSearchParams } from 'react-router-dom';

const PaymentCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  return (
    <div className="payment-result">
      {status === 'approved' && <p>Pagamento aprovado!</p>}
      {status === 'rejected' && <p>Pagamento recusado</p>}
      {status === 'pending' && <p>Pagamento pendente</p>}
    </div>
  );
};

export default PaymentCallbackPage;