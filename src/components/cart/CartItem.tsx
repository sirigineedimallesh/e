import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ 
  id, 
  title, 
  price, 
  image, 
  quantity, 
  onUpdateQuantity, 
  onRemove 
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={image} alt={title} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-2 flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button 
              onClick={() => onUpdateQuantity(id, quantity - 1)}
              disabled={quantity <= 1}
              className="p-2 hover:bg-gray-100 disabled:opacity-50"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="p-2 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
          <button 
            onClick={() => onRemove(id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">₹{(price * quantity).toLocaleString()}</p>
        <p className="text-sm text-gray-500">₹{price.toLocaleString()} each</p>
      </div>
    </div>
  );
}