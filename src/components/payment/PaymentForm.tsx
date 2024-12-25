import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (paymentDetails: any) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const paymentDetails = Object.fromEntries(formData.entries());
    onSubmit(paymentDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <div className="relative">
        <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
          pattern="[0-9]{16}"
          className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          required
          pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          required
          pattern="[0-9]{3}"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
      </div>
      <input
        type="text"
        name="nameOnCard"
        placeholder="Name on Card"
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
      />
      <button
        type="submit"
        className="w-full bg-[#2874f0] text-white py-2 rounded hover:bg-[#1c5cc9] transition-colors"
      >
        Pay Now
      </button>
    </form>
  );
}