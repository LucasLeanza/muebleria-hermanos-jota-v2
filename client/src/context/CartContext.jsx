import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + quantity }
                        : item
                );
            }
            return [...prev, { ...product, cantidad: quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {

        if (newQuantity <= 0) {
            setCart((prev) => prev.filter((item) => item.id !== productId));
            return;
        }
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, cantidad: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    }, [cart]);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};