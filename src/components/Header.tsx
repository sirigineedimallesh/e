import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#2874f0] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex flex-col">
              <span className="font-bold text-xl">Flipkart</span>
              <span className="text-xs italic">Explore Plus</span>
            </a>
            
            {/* Search Bar */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-[400px] py-2 px-4 pr-10 rounded-sm text-gray-900 focus:outline-none"
                />
                <Search className="absolute right-3 top-2 text-[#2874f0]" size={20} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="bg-white text-[#2874f0] px-8 py-1 font-medium">Login</button>
            <a href="#cart" className="hover:text-gray-200 flex items-center space-x-1">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </a>
            <a href="#" className="hover:text-gray-200 flex items-center space-x-1">
              <Heart size={20} />
              <span>Wishlist</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full py-2 px-4 pr-10 rounded-sm text-gray-900 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-[#2874f0]" size={20} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-900 px-4 py-2">
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2 py-2">
              <User size={20} />
              <span>Login</span>
            </a>
            <a href="#cart" className="flex items-center space-x-2 py-2">
              <ShoppingCart size={20} />
              <span>Cart</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2">
              <Heart size={20} />
              <span>Wishlist</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}