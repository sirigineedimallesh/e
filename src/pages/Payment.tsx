import React, { useState } from 'react';
import AddressForm from '../components/payment/AddressForm';
import PaymentForm from '../components/payment/PaymentForm';
import CartSummary from '../components/cart/CartSummary';

type Step = 'address' | 'payment' | 'confirmation';

export default function Payment() {
  const [step, setStep] = useState<Step>('address');
  const [address, setAddress] = useState<any>(null);

  const handleAddressSubmit = (addressData: any) => {
    setAddress(addressData);
    setStep('payment');
  };

  const handlePaymentSubmit = (paymentData: any) => {
    console.log('Payment processed:', { address, payment: paymentData });
    setStep('confirmation');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 'address' && (
            <AddressForm onSubmit={handleAddressSubmit} />
          )}
          {step === 'payment' && (
            <PaymentForm onSubmit={handlePaymentSubmit} />
          )}
          {step === 'confirmation' && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Order Confirmed!</h2>
              <p className="text-gray-600 mb-8">Thank you for your purchase</p>
              <a 
                href="/"
                className="inline-block bg-[#2874f0] text-white px-6 py-2 rounded hover:bg-[#1c5cc9] transition-colors"
              >
                Continue Shopping
              </a>
            </div>
          )}
        </div>
        <div>
          <CartSummary
            subtotal={71498}
            shipping={40}
            total={71538}
          />
        </div>
      </div>
    </div>
  );
}