
import React from 'react';
import type { StorePrice } from '../types';
import { TagIcon } from './icons/TagIcon';

export const PriceDisplay: React.FC<StorePrice> = ({ storeName, price, currency, affiliateLink }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center justify-between space-x-2">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{storeName}</p>
        <p className="text-sm font-bold text-indigo-600">{formattedPrice}</p>
      </div>
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors flex-shrink-0"
      >
        <TagIcon className="w-4 h-4 mr-1.5" />
        Go to store
      </a>
    </div>
  );
};
