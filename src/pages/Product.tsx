import React from 'react';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import type { Product } from '../types/product';

// Mock product data
const product: Product = {
  id: 1,
  title: "APPLE iPhone 14 (Blue, 128 GB)",
  price: 69999,
  originalPrice: 79900,
  discount: 12,
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=60",
  brand: "APPLE",
  specifications: {
    "Display": "6.1-inch Super Retina XDR display",
    "Processor": "A15 Bionic chip",
    "Camera": "Dual 12MP camera system",
    "Battery": "Up to 20 hours video playback",
    "Storage": "128 GB",
    "OS": "iOS 16",
  }
};

const productImages = [
  product.image,
  "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=60",
];

export default function Product() {
  const handleAddToCart = () => {
    window.location.hash = 'cart';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductGallery images={productImages} title={product.title} />
        <ProductInfo product={product} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}