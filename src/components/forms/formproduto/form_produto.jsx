import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle,  BsClock } from "react-icons/bs";
import "./form_produto.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slices/cartSlice';

const FormProduto = ({ productData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const basePrice = 22.00;
    const [quantity, setQuantity] = useState(1);
    const [additionals, setAdditionals] = useState({
        video: { selected: false, quantity: 1, price: 10.00, label: '+ VÍDEO' },
        urgency: { selected: false, quantity: 1, price: 50.00, label: 'URGÊNCIA - ENTREGA EM 24H' },
        legend: { selected: false, quantity: 1, price: 10.00, label: 'ACRESCENTAR LEGENDA' },
        imageRights: { selected: false, quantity: 1, price: 10.00, label: 'DIREITO DE USO DE IMAGEM' }
    });
    const [totalPrice, setTotalPrice] = useState(basePrice);

    const calculateTotal = useCallback(() => {
        let total = basePrice * quantity;
        
        Object.values(additionals).forEach(item => {
            if (item.selected) {
                total += item.price * item.quantity;
            }
        });

        return total.toFixed(2);
    }, [basePrice, quantity, additionals]);

    useEffect(() => {
        setTotalPrice(calculateTotal());
    }, [calculateTotal]);

    const handleQuantityChange = (action) => {
        if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        } else if (action === 'increase') {
            setQuantity(prev => prev + 1);
        }
    };

    const handleAdditionalChange = (key, field, value) => {
        setAdditionals(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: value
            }
        }));
    };

    const handlePurchase = () => {
        const orderSummary = {
            id: productData.id || Date.now(), // Ensure unique ID
            title: productData.title,
            image: productData.image,
            baseService: {
                quantity,
                pricePerUnit: basePrice,
                total: basePrice * quantity
            },
            additionalServices: Object.entries(additionals)
                .filter(([_, item]) => item.selected)
                .map(([key, item]) => ({
                    name: item.label,
                    quantity: item.quantity,
                    pricePerUnit: item.price,
                    total: item.price * item.quantity
                })),
            totalPrice: parseFloat(totalPrice),
            price: parseFloat(totalPrice) // Required for cart functionality
        };
        
        // Add to cart using Redux
        dispatch(addToCart(orderSummary));
        
        // Navigate to cart page
        navigate('/cart');
    };

    return (
        <div className="product-form">
            <div className="service-section">
                <h2>Serviço Principal</h2>
                <div className="delivery-info">
                    <span>
                        <BsClock className="delivery-icon" />
                        Prazo de Entrega 1 dia
                    </span>
                    <span className="price-info">R$ {basePrice.toFixed(2)}</span>
                </div>
                <div className="quantity-section">
                    <label className="quantity-section-label">Quantidade:</label>
                    <div className="quantity-control">
                        <button onClick={() => handleQuantityChange('decrease')}>-</button>
                        <input type="number" value={quantity} readOnly />
                        <button onClick={() => handleQuantityChange('increase')}>+</button>
                    </div>
                </div>
            </div>

            <div className="additionals-section">
                <h3>Adicionais</h3>
                <div className="additional-items">
                    {Object.entries(additionals).map(([key, item]) => (
                        <div key={key} className="additional-item">
                            <div className="additional-item-header">
                                <input
                                    type="checkbox"
                                    id={key}
                                    checked={item.selected}
                                    onChange={(e) => handleAdditionalChange(key, 'selected', e.target.checked)}
                                />
                                <label htmlFor={key}>{item.label}</label>
                                <BsInfoCircle className="info-icon" title={`Adicional: ${item.label}`} />
                            </div>
                            {item.selected && (
                                <select
                                    value={item.quantity}
                                    onChange={(e) => handleAdditionalChange(key, 'quantity', parseInt(e.target.value))}
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>
                                            {num} x R$ {(item.price * num).toFixed(2)}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="price-summary">
                <div className="subtotal">
                    <span>Subtotal:</span>
                    <span>R$ {(basePrice * quantity).toFixed(2)}</span>
                </div>
                {Object.entries(additionals)
                    .filter(([_, item]) => item.selected)
                    .map(([key, item]) => (
                        <div key={key} className="additional-cost">
                            <span>{item.label}:</span>
                            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))
                }
                <div className="total-price">
                    <span>Total:</span>
                    <span>R$ {totalPrice}</span>
                </div>
            </div>

            <button className="purchase-button" onClick={handlePurchase}>
                COMPRAR AGORA R$ {totalPrice}
            </button>
        </div>
    );
};

export default FormProduto;