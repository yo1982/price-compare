import React, { useEffect } from 'react';
import { XIcon } from './icons/XIcon';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 id="about-modal-title" className="text-2xl font-bold text-gray-800">
              About Global Price Comparator
            </h2>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 text-gray-600 space-y-4">
            <p>
              Welcome to the Global Price Comparator! Our mission is to help you find the best deals on electronic devices from around the world. We aggregate prices from a vast network of local and international retailers to provide you with accurate, up-to-date comparisons.
            </p>
            <p>
              You can select a primary country to see local prices and optionally compare them with another country to instantly see the price difference. We do our best to convert currencies and provide a clear percentage-based comparison to make your decision easier.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> Prices are updated periodically and may not reflect real-time store offers. The "Go to store" links are affiliate links, which means we may earn a commission if you make a purchase, at no extra cost to you. This helps us maintain and improve our service.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-3 text-right rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};
