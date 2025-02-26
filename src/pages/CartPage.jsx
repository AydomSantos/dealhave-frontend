import { useEffect, useState } from 'react';
import PaymentBrick from '../components/carrinho/PaymentBrick';
import CartSummary from '../components/carrinho/CarrinhoSummary';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Buscar itens do carrinho do localStorage ou API
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  return (
    <div className="cart-container">
      <h2>Seu Carrinho</h2>
      <CartSummary items={cartItems} />
      
      {cartItems.length > 0 ? (
        <PaymentBrick cartItems={cartItems} />
      ) : (
        <p>Seu carrinho está vazio</p>
      )}
    </div>
  );
};

export default CartPage;