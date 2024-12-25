import React from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps extends Product {}

export default function ProductCard({ title, price, originalPrice, discount, image, brand }: ProductCardProps) {
  return (
    <a href="#product" className="block">
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <div className="relative group">
          <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
          <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart size={20} className="text-gray-600 hover:text-red-500 transition-colors duration-300" />
          </button>
        </div>
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">{brand}</p>
          <h3 className="font-medium text-gray-900 truncate">{title}</h3>
          <div className="flex items-center space-x-2">
            <span className="font-bold">₹{price.toLocaleString()}</span>
            <span className="text-gray-500 line-through text-sm">₹{originalPrice.toLocaleString()}</span>
            <span className="text-green-600 text-sm">{discount}% off</span>
          </div>
        </div>
      </div>
    </a>
  );
}