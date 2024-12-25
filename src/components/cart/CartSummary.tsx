import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export default function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping.toLocaleString()}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <a
        href="#payment"
        className="block w-full mt-6 bg-[#2874f0] text-white py-2 rounded hover:bg-[#1c5cc9] transition-colors text-center"
      >
        Proceed to Checkout
      </a>
    </div>
  );
}