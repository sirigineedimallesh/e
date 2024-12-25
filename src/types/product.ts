export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  brand: string;
  description?: string;
  specifications?: Record<string, string>;
}