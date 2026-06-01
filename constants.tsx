
import { Product, Service, Testimonial } from './types';

// Try to load editable product data from data/products.json. If the file is missing
// or empty, fall back to the hard-coded arrays below. This allows non-technical
// edits by updating the JSON in the repo (GitHub web editor) without changing code.
let EXTERNAL_PRODUCTS: any = null;
try {
  // Use require so Vite will include the file if present at build time.
  // If you prefer runtime editable content, serve a JSON from a CMS or endpoint.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  EXTERNAL_PRODUCTS = require('./data/products.json');
} catch (e) {
  EXTERNAL_PRODUCTS = null;
}

const DRESSITOS_RAW: Product[] = [
  {
    id: 'd1',
    name: 'Conjunto cuadros verdes',
    description:'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_conjuntobebecuadrosverdes_final.jpg',
    images: [
      '/images/products/dressitos/Dressitos_conjuntobebecuadrosverdes_final.jpg',
      '/images/products/dressitos/Dressitos_conjuntobebecuadrosverdes_modelo_final.jpg',
      // '/images/products/dressitos/Dressitos_conjuntobebecuadrosverdes_final.jpg'
    ],
    // category: 'Bebé',
    categories: ['Bebé', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd2',
    name: 'Conjunto azul marino',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_conjunto_floral_azulmarino2_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_conjunto_floral_azulmarino2_final.jpg',
      // '/images/products/dressitos/Dressitos_conjunto_floral_azulmarino2_final.jpg',
      // '/images/products/dressitos/Dressitos_conjunto_floral_azulmarino2_final.jpg'
    ],
    // category: 'Bebé',
    categories: ['Bebé', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd3',
    name: 'Falda cuadros',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_faldacuadros_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_faldacuadros_final.jpg',
      // '/images/products/dressitos/Dressitos_faldacuadros_final.jpg',
      // '/images/products/dressitos/Dressitos_faldacuadros_final.jpg'
    ],
    category: 'Niña',
    // categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd4',
    name: 'Camiseta bolsito verde',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_Camiseta con aplique a festón y bolsito a juego  en verde agua_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_Camiseta con aplique a festón y bolsito a juego  en verde agua_final.jpg',
      // '/images/products/dressitos/Dressitos_Camiseta con aplique a festón y bolsito a juego  en verde agua_final.jpg',
      // '/images/products/dressitos/Dressitos_Camiseta con aplique a festón y bolsito a juego  en verde agua_final.jpg'
    ],
    category: 'Niña',
    // categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd5',
    name: 'Camiseta bolsito rosa',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_camiseta con aplique a festón y bolsito a juego en fucsia_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_camiseta con aplique a festón y bolsito a juego en fucsia_final.jpg',
      // '/images/products/dressitos/Dressitos_camiseta con aplique a festón y bolsito a juego en fucsia_final.jpg',
      // '/images/products/dressitos/Dressitos_camiseta con aplique a festón y bolsito a juego en fucsia_final.jpg'
    ],
    // category: 'Niña',
    categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd6',
    name: 'Camiseta flores y bolso',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_camisetafloresybolso_final.jpg',
    images: [
      '/images/products/dressitos/Dressitos_camisetafloresybolso_final.jpg',
      '/images/products/dressitos/Dressitos_camisetafloresybolso_modelo_final.jpg',
      // '/images/products/dressitos/Dressitos_camisetafloresybolso_final.jpg'
    ],
    // category: 'Niña',
    categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd7',
    name: 'Conjunto rosa floral',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_Conjunto_floresrosas_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_Conjunto_floresrosas_final.jpg',
      // '/images/products/dressitos/Dressitos_Conjunto_floresrosas_final.jpg',
      // '/images/products/dressitos/Dressitos_Conjunto_floresrosas_final.jpg'
    ],
    // category: 'Niña',
    categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd8',
    name: 'Mochila y saco para puntas',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_mochila infantil y saco puntas_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_mochila infantil y saco puntas_final.jpg',
      // '/images/products/dressitos/Dressitos_mochila infantil y saco puntas_final.jpg',
      // '/images/products/dressitos/Dressitos_mochila infantil y saco puntas_final.jpg'
    ],
    // category: 'Niña',
    categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd9',
    name: 'Saco para puntas y camiseta',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_Saco puntas y camiseta a juego con apliques a festón_final.jpg',
    images: [
      '/images/products/dressitos/Dressitos_Saco puntas y camiseta a juego con apliques a festón_final.jpg',
      '/images/products/dressitos/Dressitos_Saco puntas y camiseta a juego con apliques a festón_modelo_final.jpg',
      // '/images/products/dressitos/Dressitos_Saco puntas y camiseta a juego con apliques a festón_final.jpg'
    ],
    // category: 'Niña',
    categories: ['Niña', 'Conjuntos'],
    tag: 'Popular'
  },
  {
    id: 'd10',
    name: 'Torerita',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_torerita_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_torerita_final.jpg',
      // '/images/products/dressitos/Dressitos_torerita_final.jpg',
      // '/images/products/dressitos/Dressitos_torerita_final.jpg'
    ],
    category: 'Niña',
    // categories: ['Niña', ],
    tag: 'Popular'
  },
  {
    id: 'd11',
    name: 'Saco Harry Potter',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_mochila_harrypotter_final.jpg',
    images: [
      '/images/products/dressitos/Dressitos_mochila_harrypotter_final.jpg',
      '/images/products/dressitos/Dressitos_mochila_harrypotter_modelo1_final.jpg',
      // '/images/products/dressitos/Dressitos_mochila_harrypotter_final.jpg'
    ],
    category: 'Otros',
    // categories: ['Otros', ],
    tag: 'Popular'
  },
  {
    id: 'd12',
    name: 'Saco Spider-man',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_mochila_spiderman_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_mochila_spiderman_final.jpg',
      // '/images/products/dressitos/Dressitos_mochila_spiderman_final.jpg',
      // '/images/products/dressitos/Dressitos_mochila_spiderman_final.jpg'
    ],
    category: 'Otros',
    // categories: ['Otros', ],
    tag: 'Popular'
  },
  {
    id: 'd13',
    name: 'Pajarita',
    description: 'Description: Pendiente',
    price: 28.00,
    image: '/images/products/dressitos/Dressitos_pajarita1_final.jpg',
    images: [
      // '/images/products/dressitos/Dressitos_pajarita1_final.jpg',
      // '/images/products/dressitos/Dressitos_pajarita1_final.jpg',
      // '/images/products/dressitos/Dressitos_pajarita1_final.jpg'
    ],
    category: 'Otros',
    // categories: ['Otros', ],
    tag: 'Popular'
  },

];

export const DRESSITOS_PRODUCTS: Product[] = (EXTERNAL_PRODUCTS && Array.isArray(EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS) && EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS.length > 0)
  ? EXTERNAL_PRODUCTS.DRESSITOS_PRODUCTS
  : DRESSITOS_RAW.map(p => ({
    ...p,
    categories: p.categories && p.categories.length > 0 ? p.categories : (p.category ? [p.category] : [])
  }));

const FALLASTYLE_RAW: Product[] = [
  {
    id: 'f122',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1.jpg',
    images: [
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1_modelo_1.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1_modelo_1.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1_modelo_2.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_1_modelo_3.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item7.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  {
    id: 'f15',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_4.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_4.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_4_modelo_1.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_4_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  {
    id: 'f16',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_5.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_5.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_5_modelo_1.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_5_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  {
    id: 'f133',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_2.jpg',
    images: [
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_2_modelo_1.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_2.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_2_modelo_1.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallastyle_Retalbolso_2_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f17',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_6.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_6.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_6_modelo_1.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_6_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f14',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_3.jpg',
    images: [
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_3_modelo1.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_3.jpg',
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_3_modelo1.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallastyle_Retalbolso_3_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  
  {
    id: 'f18',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_8.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_8.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_8_modelo_1.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_8_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  
  {
    id: 'f19',
    name: 'Bolso Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_7.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_7.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_7_modelo_1.jpg',
      // '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_7_modelo_2.jpg',
    ],
    category: 'Bolsos',
    // categories: ['Bolsos', 'Other'],
    tag: 'Best Seller'
  },
  
  {
    id: 'f20',
    name: 'Saco Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalSaco1.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalSaco1.jpg',
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalSaco3.jpg',
    ],
    category: 'Sacos',
    // categories: ['Sacos', 'Other'],
    tag: 'Best Seller'
  },
  
  
  {
    id: 'f21',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote1.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote1.jpg',
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote1_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f22',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote2.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote2.jpg',
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote2_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f23',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote3.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote3.jpg',
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote3_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f24',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote4.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote4.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote4_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f25',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote5.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote5.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote5_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f26',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote6.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote6.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote6_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f27',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote7.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote7.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote7_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f28',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote8.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote8.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote8_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f29',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote9.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote9.jpg',
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote9_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f30',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote10.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote10.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote10_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f31',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote11.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote11.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote11_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f32',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote12.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote12.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote12_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f33',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote13.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote13.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote13_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f34',
    name: 'Totebag Retal Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote14.jpg',
    images: [
      '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote14.jpg',
      // '/images/products/fallastyle/tela_fallera/toteBags_sacos/Fallastyle_RetalTote14_model1.jpg',
    ],
    category: 'Totebags',
    // categories: ['Totebags', 'Other'],
    tag: 'Best Seller'
  },

  {
    id: 'f1',
    name: 'Buff Morellana',
    description: 'Description: Pendiente.',
    price: 12.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_vista3.jpg',
    images: [
      // '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_modelo1.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_vista3.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_modelo1.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_vista1.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_braga_vista2.jpg'
    ],
    // category: 'Buffs',
    categories: ['Buffs', 'Morellana'],
    tag: 'Best Seller'
  },
  {
    id: 'f2',
    name: 'Saco Morellana',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_saco_final.jpg',
    images: [
      '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_saco_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_saco_modelo1_final.jpg',
      // '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_saco_final.jpg',
    ],
    // category: 'Sacos',
    categories: ['Sacos', 'Morellana'],
    tag: 'Best Seller'
  },
  // {
  //   id: 'f3',
  //   name: 'Sacos Morellana',
  //   description: 'Description: Pendiente.',
  //   price: 15.00,
  //   image: '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_sacos_final.jpg',
  //   images: [
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_sacos_final.jpg',
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_sacos_final.jpg',
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_Morellana_sacos_final.jpg'
  //   ],
  //   category: 'Sacos',
  //   tag: 'Best Seller'
  // },
  {
    id: 'f4',
    name: 'Saco y monedero Morellana',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_Morellanasaco_bolsito__final.jpg',
    images: [
      '/images/products/fallastyle/manta_morellana/Fallastyle_Morellanasaco_bolsito__final.jpg',
      // '/images/products/fallastyle/manta_morellana/Fallastyle_Morellanasaco_bolsito__final.jpg',
      // '/images/products/fallastyle/manta_morellana/Fallastyle_Morellanasaco_bolsito__final.jpg'
    ],
    // category: 'Morellana',
    categories: ['Sacos', 'Morellana'],
    tag: 'Best Seller'
  },
  // {
  //   id: 'f5',
  //   name: 'Conjunto Morellana',
  //   description: 'Description: Pendiente.',
  //   price: 15.00,
  //   image: '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_1_final.jpg',
  //   images: [
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_1_final.jpg',
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_1_final.jpg',
  //     '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_1_final.jpg'
  //   ],
  //   category: 'Morellana',
  // categories: ['Morellana'],
  //   tag: 'Best Seller'
  // },
  {
    id: 'f6',
    name: 'Conjunto Morellana',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_2_final.jpg',
    images: [
      '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_2_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_2_modelo1.jpg',
      // '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_2_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_conjuntoMorellana_1_final.jpg',
    ],
    category: 'Morellana',
    // categories: ['Morellana','Morellana'],
  },
  
  {
    id: 'f7',
    name: 'Riñonera Morellana',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_rinonera_final.jpg',
    images: [
      '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_rinonera_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_rinonera_modelo1.jpg',
      // '/images/products/fallastyle/manta_morellana/Fallastyle_morellana_rinonera_final.jpg'
    ],
    category: 'Morellana',
    // categories: ['Morellana','Morellana'],
    tag: 'Best Seller'
  },
  {
    id: 'f8',
    name: 'Fundas Móvil Morellana',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/manta_morellana/Fallastyle_bolsitos_Morellana_final.jpg',
    images: [
      // '/images/products/fallastyle/manta_morellana/Fallastyle_bolsitos_Morellana_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_bolsitos_Morellana_final.jpg',
      '/images/products/fallastyle/manta_morellana/Fallastyle_bolsitos_Morellana_final.jpg',
    ],
    category: 'Morellana',
    // categories: ['Morellana', 'Morellana'],
    tag: 'Best Seller'
  },


  {
    id: 'f9',
    name: 'Buff Pañuelo Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item2.jpg',
    images: [
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item2.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item2.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item2.jpg'
    ],
    // category: 'Buffs',
    categories: ['Buffs', 'Tela Pañuelo Fallero'],
    tag: 'Best Seller'
  },
  {
    id: 'f10',
    name: 'Saco Pañuelo Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/Fallasstyle_panuelo_item3.jpg',
    images: [
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item13.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item3.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item8.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item13.jpg',
    ],
    /// category: 'Sacos',
    categories: ['Sacos', 'Tela Pañuelo Fallero'],
    tag: 'Best Seller'
  },

  {
    id: 'f12',
    name: 'Saco Pañuelo Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/Fallasstyle_panuelo_item6.jpg',
    images: [
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item6.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item12.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item13.jpg',
    ],
    /// category: 'Sacos',
    categories: ['Sacos', 'Tela Pañuelo Fallero'],
    tag: 'Best Seller'
  },
  {
    id: 'f11',
    name: 'Saco y mondero Pañuelo Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item1.jpg',
    images: [
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item1.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item4.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item9.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item11.jpg',
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item7.jpg',
    ],
    // category: 'Sacos',
    categories: ['Sacos', 'Tela Pañuelo Fallero'],
    tag: 'Best Seller'
  },  
  
  {
    id: 'f13',
    name: 'Bolso Pañuelo Fallero',
    description: 'Description: Pendiente.',
    price: 15.00,
    image: '/images/products/fallastyle/Fallasstyle_panuelo_item5.jpg',
    images: [
      '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item5.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item12.jpg',
      // '/images/products/fallastyle/Pañuelo_fallero/Fallasstyle_panuelo_item13.jpg',
    ],
    // category: 'Sacos',
    categories: ['Sacos', 'Tela Pañuelo Fallero'],
    tag: 'Best Seller'
  },



  
];

export const FALLASTYLE_PRODUCTS: Product[] = (EXTERNAL_PRODUCTS && Array.isArray(EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS) && EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS.length > 0)
  ? EXTERNAL_PRODUCTS.FALLASTYLE_PRODUCTS
  : FALLASTYLE_RAW.map(p => ({
    ...p,
    categories: p.categories && p.categories.length > 0 ? p.categories : (p.category ? [p.category] : [])
  }));

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
