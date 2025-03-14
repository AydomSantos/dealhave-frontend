import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity, setPaymentStatus } from '../../store/slices/cartSlice';
import { FiTrash2, FiShoppingBag} from 'react-icons/fi';
import PaymentSimulation from '../../components/pagamento/PaymentSimulation';
import './CartPage.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, totalAmount, showPayment } = useSelector((state) => state.cart);
    const { isAuthenticated } = useSelector((state) => state.user);

    const handleQuantityChange = (id, currentQuantity, action) => {
        let newQuantity = currentQuantity;
        if (action === 'increase') {
            newQuantity += 1;
        } else if (action === 'decrease' && currentQuantity > 1) {
            newQuantity -= 1;
        }
        
        if (newQuantity !== currentQuantity) {
            dispatch(updateQuantity({ id, quantity: newQuantity }));
        }
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    if (items.length === 0) {
        return (
            <div className="cart-container">
                <div className="empty-cart">
                    <FiShoppingBag size={48} color="#666" />
                    <h2>Seu carrinho está vazio</h2>
                    <p>Adicione itens ao seu carrinho para continuar comprando.</p>
                    <Link to="/" className="continue-shopping">Continuar Comprando</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>MEU CARRINHO</h1>
            </div>

            <div className="cart-content">
                <div className="cart-items">
                    <div className="cart-table-header">
                        <div className="product-col">Produto</div>
                        <div className="qtdd-col">Qtdd</div>
                        <div className="price-col">Preço à Vista no PIX</div>
                    </div>

                    {items.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="product-col">
                                <img src={item.image} alt={item.title} />
                                <div className="product-info">
                                    <h3>{item.title}</h3>
                                    <p className="sku">SKU: {item.id}</p>
                                </div>
                            </div>
                            <div className="qtdd-col">
                                <div className="quantity-control">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity, 'decrease')}>-</button>
                                    <input type="number" value={item.quantity} readOnly />
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity, 'increase')}>+</button>
                                </div>
                            </div>
                            <div className="price-col">
                                <div className="price-info">
                                    <span className="pix-price">R$ {(item.price * 0.85).toFixed(2)}</span>
                                    <span className="regular-price">R$ {item.price.toFixed(2)}</span>
                                    <span className="installments">em até 12x de R$ {(item.price / 12).toFixed(2)}</span>
                                </div>
                                <button onClick={() => handleRemoveFromCart(item.id)} className="remove-item">
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="cart-actions">
                        <div className="coupon-section">
                            <input type="text" placeholder="Cupom de desconto" />
                            <button className="apply-coupon">APLICAR</button>
                        </div>
                        <div className="shipping-section">
                            <input type="text" placeholder="CEP" />
                            <button className="calculate-shipping">CALCULAR</button>
                        </div>
                    </div>
                </div>

                <div className="cart-summary">
                    <h2>Resumo</h2>
                    <div className="summary-content">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>R$ {totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>R$ {totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="payment-options">
                            <div className="pix-price">
                                <span>à vista</span>
                                <strong>R$ {(totalAmount * 0.85).toFixed(2)}</strong>
                                <span>no PIX com 15% desconto</span>
                            </div>
                            <div className="card-price">
                                <span>R$ {totalAmount.toFixed(2)}</span>
                                <span>em até 12x de R$ {(totalAmount / 12).toFixed(2)}</span>
                                <span>sem juros no cartão</span>
                            </div>
                        </div>
                        {!showPayment ? (
                            <button className="checkout-button" onClick={() => {
                                if (!isAuthenticated) {
                                    navigate('/login');
                                    return;
                                }
                                dispatch(setPaymentStatus(true));
                            }}>
                                FINALIZAR PEDIDO
                            </button>
                        ) : (
                            <PaymentSimulation 
                                totalAmount={totalAmount} 
                                onPaymentComplete={() => {
                                    // Handle payment completion
                                    console.log('Payment completed');
                                    dispatch(setPaymentStatus(false));
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;