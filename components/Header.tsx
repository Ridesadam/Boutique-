
import React from 'react';
import { SHOP_NAME, SHOP_LOCATION } from '../constants';

interface HeaderProps {
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 py-4 px-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <button 
          onClick={onGoHome}
          className="text-2xl font-bold text-orange-600 hover:opacity-80 transition-opacity"
        >
          {SHOP_NAME}
        </button>
        <div className="hidden sm:block text-sm text-gray-500 font-medium italic">
          📍 {SHOP_LOCATION}
        </div>
      </div>
    </header>
  );
};
