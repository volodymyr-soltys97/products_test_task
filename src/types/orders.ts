export interface Price {
  isDefault: number;
  symbol: string;
  value: number;
}

export interface Guarantee {
  start: string;
  end: string;
}

export interface Products {
  date: string;
  guarantee: Guarantee;
  id: number;
  isNew: number;
  order: number;
  photo: string;
  price: Price[];
  serialNumber: number;
  specification: string;
  title: string;
  type: string;
}

export interface Order {
  date: string;
  description: string;
  id: number;
  products: Products[];
  title: string;
}
