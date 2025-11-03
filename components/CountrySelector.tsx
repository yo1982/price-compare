
import React from 'react';
import type { Country } from '../types';

interface CountrySelectorProps {
  label: string;
  countries: Country[];
  selectedValue: string;
  onChange: (value: string) => void;
  includeNoneOption?: boolean;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  label,
  countries,
  selectedValue,
  onChange,
  includeNoneOption = false,
}) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={label}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
      >
        {includeNoneOption && <option value="none">-- None --</option>}
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
