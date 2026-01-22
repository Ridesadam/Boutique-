
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export enum Page {
  Home = 'HOME',
  Catalog = 'CATALOG'
}
