import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Normaliza IDs provenientes del backend o mock: usa `id` o `_id`.
  const getId = (x) => (x?.id ?? x?._id);

  const addToCart = (product) => {
    const pid = getId(product);
    setCartItems(prev => {
      const existing = prev.find(item => (item.id ?? item._id) === pid);
      if (existing) {
        return prev.map(item =>
          (item.id ?? item._id) === pid
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Asegura que el item en el carrito siempre tenga `id` normalizado
      return [...prev, { ...product, id: pid, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => (item.id ?? item._id) !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        (item.id ?? item._id) === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + ((Number(item.precio) || 0) * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
