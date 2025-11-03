import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CountrySelector } from './components/CountrySelector';
import { ProductCard } from './components/ProductCard';
import { COUNTRIES, MOCK_PRODUCTS } from './constants';
import { AboutModal } from './components/AboutModal';
import type { Country } from './types';

const App: React.FC = () => {
  const [primaryCountry, setPrimaryCountry] = useState<Country>(COUNTRIES[0]);
  const [secondaryCountry, setSecondaryCountry] = useState<Country | null>(COUNTRIES[6]);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handlePrimaryCountryChange = (countryCode: string) => {
    const country = COUNTRIES.find(c => c.code === countryCode);
    if (country) {
      setPrimaryCountry(country);
    }
  };

  const handleSecondaryCountryChange = (countryCode: string) => {
    if (countryCode === 'none') {
      setSecondaryCountry(null);
    } else {
      const country = COUNTRIES.find(c => c.code === countryCode);
      if (country) {
        setSecondaryCountry(country);
      }
    }
  };

  const secondaryCountryOptions = useMemo(() => {
    return COUNTRIES.filter(c => c.code !== primaryCountry.code);
  }, [primaryCountry]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header onAboutClick={() => setIsAboutModalOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Price Comparison Setup</h2>
          <p className="text-gray-500 mb-6">Select two countries to compare prices and see the percentage difference.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CountrySelector
              label="Primary Country (Show prices from)"
              countries={COUNTRIES}
              selectedValue={primaryCountry.code}
              onChange={handlePrimaryCountryChange}
            />
            <CountrySelector
              label="Compare With (Optional)"
              countries={secondaryCountryOptions}
              selectedValue={secondaryCountry?.code || 'none'}
              onChange={handleSecondaryCountryChange}
              includeNoneOption={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              primaryCountry={primaryCountry}
              secondaryCountry={secondaryCountry}
            />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 mt-8 bg-white border-t">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Global Price Comparator. All rights reserved.</p>
      </footer>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
};

export default App;
