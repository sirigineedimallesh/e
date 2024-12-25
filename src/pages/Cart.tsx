import React, { useState } from 'react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

// Mock cart data - in a real app, this would come from a cart context/state management
const initialCartItems = [
  {
    id: 1,
    title: "APPLE iPhone 14 (Blue, 128 GB)",
    price: 69999,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=60",
    quantity: 1
  },
  {
    id: 5,
    title: "boAt Rockerz 450 Bluetooth Headset",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    quantity: 2
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 40 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add items to your cart to continue shopping</p>
          <a 
            href="/"
            className="inline-block bg-[#2874f0] text-white px-6 py-2 rounded hover:bg-[#1c5cc9] transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart ({cartItems.length} items)</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <div>
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}