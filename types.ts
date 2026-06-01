
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category?: string;
  categories?: string[];
  tag?: 'Nuevo' | 'Popular' | 'Best Seller';
  details?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  avatar: string;
  rating: number;
}
