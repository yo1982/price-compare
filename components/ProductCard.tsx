
import React from 'react';
import type { Product, Country, StorePrice } from '../types';
import { PriceDisplay } from './PriceDisplay';

interface ProductCardProps {
  product: Product;
  primaryCountry: Country;
  secondaryCountry: Country | null;
}

const getCheapestPrice = (prices: StorePrice[] | undefined): number | null => {
  if (!prices || prices.length === 0) return null;
  return Math.min(...prices.map(p => p.price));
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, primaryCountry, secondaryCountry }) => {
  const primaryPrices = product.countryPrices.find(p => p.countryCode === primaryCountry.code)?.prices.sort((a, b) => a.price - b.price);
  const secondaryPrices = secondaryCountry ? product.countryPrices.find(p => p.countryCode === secondaryCountry.code)?.prices.sort((a, b) => a.price - b.price) : undefined;

  const cheapestPrimary = getCheapestPrice(primaryPrices);
  const cheapestSecondary = getCheapestPrice(secondaryPrices);

  const renderPriceDifference = () => {
    if (cheapestPrimary === null || cheapestSecondary === null || !secondaryCountry) return null;

    const diff = cheapestPrimary - cheapestSecondary;
    const percentageDiff = (diff / cheapestSecondary) * 100;

    if (Math.abs(percentageDiff) < 0.01) {
      return <div className="text-center text-sm text-gray-600 p-2 bg-gray-100 rounded-md">Prices are nearly identical.</div>;
    }

    const isPrimaryCheaper = percentageDiff < 0;
    const absPercentage = Math.abs(percentageDiff).toFixed(0);

    return (
      <div className={`text-center text-sm font-semibold p-3 rounded-lg mt-4 ${isPrimaryCheaper ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {isPrimaryCheaper 
          ? `~${absPercentage}% CHEAPER in ${primaryCountry.name} ${primaryCountry.flag}` 
          : `~${absPercentage}% MORE EXPENSIVE in ${primaryCountry.name} ${primaryCountry.flag}`}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col border border-gray-200">
      <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
        
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">{primaryCountry.flag} Prices in {primaryCountry.name}</h4>
              {primaryPrices && primaryPrices.length > 0 ? (
                <div className="space-y-2">
                  {primaryPrices.map(price => <PriceDisplay key={price.storeName} {...price} />)}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No prices found.</p>
              )}
            </div>
            {secondaryCountry && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">{secondaryCountry.flag} Prices in {secondaryCountry.name}</h4>
                {secondaryPrices && secondaryPrices.length > 0 ? (
                  <div className="space-y-2">
                    {secondaryPrices.map(price => <PriceDisplay key={price.storeName} {...price} />)}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No prices found.</p>
                )}
              </div>
            )}
          </div>
           {renderPriceDifference()}
        </div>
      </div>
    </div>
  );
};
