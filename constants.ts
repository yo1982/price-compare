import type { Country, Product } from './types';

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'NextGen Smartphone X',
    description: 'The latest smartphone with a stunning OLED display, AI-powered camera, and all-day battery life. Perfect for productivity and entertainment.',
    imageUrl: 'https://picsum.photos/seed/phonex/600/400',
    countryPrices: [
      { countryCode: 'US', prices: [
        { storeName: 'Amazon US', price: 999.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Best Buy', price: 1029.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Newegg', price: 999.50, currency: 'USD', affiliateLink: '#' },
      ]},
      { countryCode: 'UK', prices: [
        { storeName: 'Currys', price: 899.00, currency: 'GBP', affiliateLink: '#' },
        { storeName: 'Argos', price: 910.00, currency: 'GBP', affiliateLink: '#' },
      ]},
      { countryCode: 'DE', prices: [
        { storeName: 'MediaMarkt', price: 949.00, currency: 'EUR', affiliateLink: '#' },
        { storeName: 'Saturn', price: 959.00, currency: 'EUR', affiliateLink: '#' },
        { storeName: 'Amazon DE', price: 945.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'SA', prices: [
        { storeName: 'Jarir', price: 3799.00, currency: 'SAR', affiliateLink: '#' },
        { storeName: 'Extra', price: 3849.00, currency: 'SAR', affiliateLink: '#' },
      ]},
      { countryCode: 'AE', prices: [
        { storeName: 'SharafDG', price: 3699.00, currency: 'AED', affiliateLink: '#' },
        { storeName: 'Noon', price: 3729.00, currency: 'AED', affiliateLink: '#' },
      ]},
      { countryCode: 'CA', prices: [
        { storeName: 'BestBuy CA', price: 1299.00, currency: 'CAD', affiliateLink: '#' },
      ]},
      { countryCode: 'FR', prices: [
        { storeName: 'Fnac', price: 999.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'ES', prices: [
        { storeName: 'El Corte Inglés', price: 989.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'EG', prices: [
        { storeName: 'B.TECH', price: 22000.00, currency: 'EGP', affiliateLink: '#' },
      ]},
      { countryCode: 'TR', prices: [
        { storeName: 'Trendyol', price: 25000.00, currency: 'TRY', affiliateLink: '#' },
      ]},
    ],
  },
  {
    id: 2,
    name: 'ProBook UltraThin Laptop',
    description: 'A powerful and lightweight laptop designed for professionals on the go. Features a 14-inch 4K display and the latest-gen processor.',
    imageUrl: 'https://picsum.photos/seed/laptop/600/400',
    countryPrices: [
      { countryCode: 'US', prices: [
        { storeName: 'Dell Store', price: 1499.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'B&H Photo', price: 1520.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Amazon US', price: 1499.99, currency: 'USD', affiliateLink: '#' },
      ]},
      { countryCode: 'UK', prices: [
        { storeName: 'Currys', price: 1350.00, currency: 'GBP', affiliateLink: '#' },
        { storeName: 'Amazon UK', price: 1345.00, currency: 'GBP', affiliateLink: '#' },
      ]},
      { countryCode: 'DE', prices: [
        { storeName: 'MediaMarkt', price: 1450.00, currency: 'EUR', affiliateLink: '#' },
      ]},
       { countryCode: 'AU', prices: [
        { storeName: 'JB Hi-Fi', price: 2200.00, currency: 'AUD', affiliateLink: '#' },
        { storeName: 'Kogan', price: 2150.00, currency: 'AUD', affiliateLink: '#' },
      ]},
      { countryCode: 'CA', prices: [
        { storeName: 'BestBuy CA', price: 1899.00, currency: 'CAD', affiliateLink: '#' },
        { storeName: 'Amazon CA', price: 1879.00, currency: 'CAD', affiliateLink: '#' },
      ]},
      { countryCode: 'FR', prices: [
        { storeName: 'Fnac', price: 1550.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'SA', prices: [
        { storeName: 'Jarir', price: 5800.00, currency: 'SAR', affiliateLink: '#' },
      ]},
    ],
  },
  {
    id: 3,
    name: 'SoundWave Wireless Headphones',
    description: 'Immerse yourself in high-fidelity audio with these noise-cancelling headphones. Up to 30 hours of playtime on a single charge.',
    imageUrl: 'https://picsum.photos/seed/headphones/600/400',
    countryPrices: [
      { countryCode: 'US', prices: [
        { storeName: 'Amazon US', price: 349.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Walmart', price: 348.00, currency: 'USD', affiliateLink: '#' },
      ]},
      { countryCode: 'UK', prices: [
        { storeName: 'Argos', price: 299.00, currency: 'GBP', affiliateLink: '#' },
      ]},
      { countryCode: 'DE', prices: [
        { storeName: 'Saturn', price: 329.00, currency: 'EUR', affiliateLink: '#' },
        { storeName: 'Amazon DE', price: 325.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'FR', prices: [
        { storeName: 'Fnac', price: 349.00, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'ES', prices: [
        { storeName: 'El Corte Inglés', price: 349.99, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'AU', prices: [
        { storeName: 'JB Hi-Fi', price: 499.00, currency: 'AUD', affiliateLink: '#' },
      ]},
      { countryCode: 'CA', prices: [
        { storeName: 'Amazon CA', price: 449.00, currency: 'CAD', affiliateLink: '#' },
      ]},
      { countryCode: 'AE', prices: [
        { storeName: 'Noon', price: 1299.00, currency: 'AED', affiliateLink: '#' },
      ]},
    ],
  },
  {
    id: 4,
    name: 'Gaming Console Pro 5',
    description: 'Experience next-gen gaming with lightning-fast loading, ultra-high-speed SSD, and deeper immersion with support for haptic feedback.',
    imageUrl: 'https://picsum.photos/seed/console/600/400',
    countryPrices: [
      { countryCode: 'US', prices: [
        { storeName: 'Amazon US', price: 499.99, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Walmart', price: 499.00, currency: 'USD', affiliateLink: '#' },
        { storeName: 'Best Buy', price: 499.99, currency: 'USD', affiliateLink: '#' },
      ]},
      { countryCode: 'UK', prices: [
        { storeName: 'Argos', price: 479.99, currency: 'GBP', affiliateLink: '#' },
        { storeName: 'Currys', price: 479.00, currency: 'GBP', affiliateLink: '#' },
      ]},
      { countryCode: 'DE', prices: [
        { storeName: 'MediaMarkt', price: 549.00, currency: 'EUR', affiliateLink: '#' },
        { storeName: 'Saturn', price: 549.99, currency: 'EUR', affiliateLink: '#' },
      ]},
      { countryCode: 'AU', prices: [
        { storeName: 'JB Hi-Fi', price: 799.00, currency: 'AUD', affiliateLink: '#' },
      ]},
       { countryCode: 'JO', prices: [
        { storeName: 'Smart Buy', price: 450.00, currency: 'JOD', affiliateLink: '#' },
      ]},
    ],
  },
];
