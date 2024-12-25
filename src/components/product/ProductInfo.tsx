import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import type { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductInfo({ product, onAddToCart }: ProductInfoProps) {
  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl font-medium mb-2">{product.title}</h1>
          <p className="text-gray-500">{product.brand}</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-3xl font-semibold">₹{product.price.toLocaleString()}</span>
        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
        <span className="text-green-600">{product.discount}% off</span>
      </div>

      <button
        onClick={onAddToCart}
        className="w-full bg-[#2874f0] text-white py-3 rounded-lg hover:bg-[#1c5cc9] transition-colors mb-8"
      >
        Add to Cart
      </button>

      {product.specifications && (
        <div className="border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Specifications</h2>
          <dl className="grid gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3">
                <dt className="text-gray-600">{key}</dt>
                <dd className="col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}