import { Product, Service, Testimonial } from './types';
// Static JSON import so the bundler inlines product data at build time.
// resolveJsonModule is enabled in tsconfig.json.
import productsData from './data/products.json';
const EXTERNAL_PRODUCTS: any = productsData || null;

const normalize = (arr: any[] = []): Product[] =>
  arr.map(p => ({
    ...p,
    categories: p.categories && p.categories.length > 0 ? p.categories : (p.category ? [p.category] : [])
  }));

export const DRESSITOS_PRODUCTS: Product[] = (EXTERNAL_PRODUCTS && Array.isArray(EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS) && EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS.length > 0)
  ? normalize(EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS)
  : [];

export const FALLASTYLE_PRODUCTS: Product[] = (EXTERNAL_PRODUCTS && Array.isArray(EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS) && EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS.length > 0)
  ? normalize(EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS)
  : [];

export const ARREGLOS_SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Bajos de Ropa',
    description: 'Ajuste de largo para pantalones, faldas y vestidos. Acabados profesionales.',
    priceRange: 'Desde 8€',
    image: '/images/products/arreglos/Dressitos_pajarita1_final.jpg',
    icon: 'straighten'
  },
  {
    id: 's2',
    name: 'Cojines a Medida',
    description: 'Confección de fundas personalizadas para hogar y jardín.',
    priceRange: 'Desde 15€',
    image: '/images/products/arreglos/Dressitos_pajarita1_final.jpg',
    icon: 'chair'
  },
  {
    id: 's3',
    name: 'Cambio de Cremalleras',
    description: 'Sustitución en todo tipo de prendas y complementos.',
    priceRange: 'Desde 12€',
    image: '/images/products/arreglos/Dressitos_pajarita1_final.jpg',
    icon: 'checkroom'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Laura M.',
    text: '"La calidad de los tejidos es increíble. Se nota el amor en cada puntada. Mi bebé está guapísimo con su conjunto de Dressitos."',
    avatar: '/images/products/arreglos/Dressitos_pajarita1_final.jpg',
    rating: 5
  }
];

