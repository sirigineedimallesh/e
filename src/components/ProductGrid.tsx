import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "APPLE iPhone 14 (Blue, 128 GB)",
    price: 69999,
    originalPrice: 79900,
    discount: 12,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=60",
    brand: "APPLE"
  },
  {
    id: 2,
    title: "SAMSUNG Galaxy S21 FE 5G (Olive, 128 GB)",
    price: 39999,
    originalPrice: 74999,
    discount: 46,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
    brand: "SAMSUNG"
  },
  {
    id: 3,
    title: "OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)",
    price: 19999,
    originalPrice: 24999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
    brand: "OnePlus"
  },
  {
    id: 4,
    title: "APPLE MacBook Air M1 (Space Gray, 256 GB)",
    price: 84990,
    originalPrice: 99900,
    discount: 15,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60",
    brand: "APPLE"
  },
  {
    id: 5,
    title: "boAt Rockerz 450 Bluetooth Headset",
    price: 1499,
    originalPrice: 3990,
    discount: 62,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    brand: "boAt"
  },
  {
    id: 6,
    title: "SONY WH-1000XM4 Bluetooth Headset",
    price: 19990,
    originalPrice: 29990,
    discount: 33,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60",
    brand: "SONY"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}