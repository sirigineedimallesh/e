import React from 'react';

interface AddressFormProps {
  onSubmit: (address: any) => void;
}

export default function AddressForm({ onSubmit }: AddressFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const address = Object.fromEntries(formData.entries());
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="col-span-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="col-span-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
      </div>
      <input
        type="text"
        name="street"
        placeholder="Street Address"
        required
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="pincode"
          placeholder="PIN Code"
          required
          pattern="[0-9]{6}"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          pattern="[0-9]{10}"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#2874f0] text-white py-2 rounded hover:bg-[#1c5cc9] transition-colors"
      >
        Continue to Payment
      </button>
    </form>
  );
}