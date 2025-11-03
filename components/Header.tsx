import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';

interface HeaderProps {
  onAboutClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GlobeIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Global Price Comparator
          </h1>
        </div>
        <nav>
          <button 
            onClick={onAboutClick}
            className="text-gray-600 hover:text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded px-2 py-1"
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
};
