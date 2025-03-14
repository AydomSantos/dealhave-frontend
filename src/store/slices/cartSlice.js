import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        showPayment: false
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            
            state.totalQuantity++;
            state.totalAmount = state.items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
            
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
                state.totalAmount = state.items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                );
            }
        },
        setPaymentStatus: (state, action) => {
            state.showPayment = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, setPaymentStatus } = cartSlice.actions;
export default cartSlice.reducer;