
export interface StorePrice {
  storeName: string;
  price: number;
  currency: string;
  affiliateLink: string;
}

export interface CountryPrice {
  countryCode: string;
  prices: StorePrice[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  countryPrices: CountryPrice[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}
