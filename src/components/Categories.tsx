import React from 'react';
import { Smartphone, Laptop, Headphones, Camera, Watch, Gift } from 'lucide-react';

const categories = [
  { name: 'Mobiles', icon: Smartphone },
  { name: 'Electronics', icon: Laptop },
  { name: 'Audio', icon: Headphones },
  { name: 'Cameras', icon: Camera },
  { name: 'Watches', icon: Watch },
  { name: 'Offers', icon: Gift },
];

export default function Categories() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.name}
                href="#"
                className="flex flex-col items-center min-w-[100px] px-4 hover:text-[#2874f0] transition-colors duration-300"
              >
                <Icon size={24} />
                <span className="mt-1 text-sm">{category.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}