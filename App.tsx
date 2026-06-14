import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import { DRESSITOS_PRODUCTS, FALLASTYLE_PRODUCTS, ARREGLOS_SERVICES, TESTIMONIALS } from './constants';
import { getArtisanAdvice } from './services/geminiService';
import { Product } from './types';

interface ProductGalleryProps {
  title: string;
  products: Product[];
  heroData: { subtitle: string; img: string };
  showTraditionSection?: boolean;
  onSelectProduct?: (product: Product) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ title, products, heroData, showTraditionSection, onSelectProduct }) => {
  const [selectedCat, setSelectedCat] = useState('Todos');
  
  const categories = useMemo(() => {
    const all = products.flatMap(p => (p.categories && p.categories.length > 0) ? p.categories : (p.category ? [p.category] : []));
    const unique = Array.from(new Set(all)).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    return ['Todos', ...unique];
  }, [products]);

  const filtered = selectedCat === 'Todos'
    ? products
    : products.filter(p => {
        const cats = (p.categories && p.categories.length > 0) ? p.categories : (p.category ? [p.category] : []);
        return cats.includes(selectedCat);
      });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-40">
      {/* Header Hero */}
      <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("${heroData.img}")` }} />
        <div className="relative z-10 text-center px-6 max-w-4xl animate-reveal">
          {/* <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-white bg-primary/80 rounded-full backdrop-blur-md">Nueva Colección 2024</span> */}
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 drop-shadow-2xl">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-2xl mx-auto drop-shadow-md">
            {heroData.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-primary/10 pb-8">
          <h2 className="text-2xl font-bold font-display text-text-main dark:text-white">Explorar Productos</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedCat === cat 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white dark:bg-white/10 text-text-secondary dark:text-gray-300 border border-primary/10 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20 animate-reveal">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={() => onSelectProduct?.(product)} />
          ))}
        </div>

        {showTraditionSection && (
          <section className="mt-40 py-24 bg-white dark:bg-[#2a1f17] rounded-[4rem] border border-primary/5 shadow-inner">
             <div className="max-w-[800px] mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center size-20 rounded-full bg-primary/10 text-primary mb-8">
                  <span className="material-symbols-outlined !text-4xl">history_edu</span>
                </div>
                <h3 className="text-4xl font-display font-bold mb-8">El Arte de la Tradición</h3>
                <p className="text-lg text-text-secondary dark:text-gray-300 leading-relaxed mb-12">
                  Nuestra colección "Fallastyle" nace del amor por la indumentaria valenciana. Cada pieza está confeccionada artesanalmente utilizando retales de sedas, damascos y brocateles que cuentan historias de nuestra fiesta.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-primary/10 pt-12">
                  {[
                    { icon: 'pan_tool', title: 'Hecho a Mano', desc: 'Artesanía en Valencia' },
                    { icon: 'recycling', title: 'Sostenible', desc: 'Tejidos nobles' },
                    { icon: 'diamond', title: 'Exclusivo', desc: 'Series limitadas' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined !text-4xl text-primary">{item.icon}</span>
                      <h4 className="font-bold text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[10px] text-text-secondary uppercase tracking-widest">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="py-40 text-center">
            <span className="material-symbols-outlined !text-6xl text-primary/20 mb-4">inventory_2</span>
            <p className="text-xl font-bold text-text-secondary">Próximamente nuevas creaciones...</p>
            <button onClick={() => setSelectedCat('Todos')} className="mt-6 text-primary font-bold border-b border-primary pb-1">Ver todos los productos</button>
          </div>
        )}
      </div>
    </div>
  );
};

const ConceptBlockA: React.FC<{ 
  title: string; 
  description: string; 
  img: string; 
  reverse?: boolean; 
  delay?: string 
}> = ({ title, description, img, reverse, delay = "0ms" }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 mb-32 animate-reveal`} style={{ animationDelay: delay }}>
    <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3] scale-110">
      <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h3 className="text-display font-black uppercase tracking-[0.4rem] text-[2rem] mb-4">{title}</h3>
      <p className="text-[1.4rem] font-display font-medium text-text-main dark:text-white leading-snug">
        {description}
      </p>
    </div>
  </div>
);

const ConceptBlockB: React.FC<{ 
  title: string; 
  description: string; 
  img: string; 
  reverse?: boolean; 
  delay?: string 
}> = ({ title, description, img, reverse, delay = "0ms" }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 mb-32 animate-reveal`} style={{ animationDelay: delay }}>
    <div className="w-full md:w-1/2 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]  scale-110">
      <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[2rem] mb-4">{title}</h3>
      <p className="text-[1.4rem] font-display font-medium text-text-main dark:text-white leading-snug">
        {description}
      </p>
    </div>
  </div>
);

const BespokeStep: React.FC<{ number: string, title: string, desc: string, icon: string }> = ({ number, title, desc, icon }) => (
  <div className="relative p-10 bg-white dark:bg-white/5 rounded-[3rem] border border-primary/10 shadow-xl group hover:-translate-y-2 transition-transform duration-500">
    <div className="absolute -top-6 -right-6 size-16 rounded-3xl bg-primary text-white flex items-center justify-center font-display font-bold text-2xl shadow-xl z-10">{number}</div>
    <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined !text-3xl">{icon}</span>
    </div>
    <h4 className="text-xl font-bold font-display mb-4">{title}</h4>
    <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed italic">"{desc}"</p>
  </div>
);

const Home: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => (
  <div className="flex flex-col gap-0 pb-0 overflow-hidden">
    <section className="relative min-h-[60vh] lg:min-h-[80vh] w-full flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
         <img 
          src="/images/hero/Gemini_imagen_Sorolla_1.png" 
          className="w-full h-full object-cover opacity-30 dark:opacity-30 transition-opacity duration-1000 blur-[2px] scale-105" // "opacity-30" this set the transparency of the Home background
          alt="Creativa Textil Hero"
         />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/40 to-background-light dark:via-background-dark/60 dark:to-background-dark z-[1]" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1200px]">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 animate-reveal">Desde 2012 · Valencia</span>
        <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-display font-black leading-none mb-24 animate-reveal [animation-delay:200ms] drop-shadow-xl text-display">
          Creativa Textil <br/> <span className="text-primary italic font-light">Artesanal</span>
        </h1>
        <p className="text-[1.4rem] text-text-main dark:text-gray-300 font-serif italic max-w-8xl animate-reveal [animation-delay:400ms] mb-10">
          Así nace un universo textil artesanal donde cada pieza se reconoce por su esencia
        </p>

        {/* Concept Blocks Section */}
        <div className="w-full text-left mt-10">
          <ConceptBlockA 
            title="CREATIVA" 
            description="Porque de una pequeña idea surgen múltiples versiones que confluyen en algo original y exclusivo."
            img="/images/home/creativa_home.png"
            delay="400ms"
          />
          <ConceptBlockA 
            title="TEXTIL" 
            description="Multitud de fibras desde las más naturales hasta las más sofisticadas, se entrelazan formando auténticas obras de arte."
            img="/images/home/textil_home.png"
            reverse
            delay="600ms"
          />
          <ConceptBlockB 
            title="ARTESANAL" 
            description="Por su elaboración así definida y a escala doméstica , imprime un sello único y personal."
            img="/images/home/artesanal_home_2.png"
            delay="800ms"
          />
        </div>
      </div>
    </section>

    <section className="py-32 px-6 bg-white dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto text-center mb-20">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[1.1rem] mb-4 block">Nuestras Especialidades</span>
        <h2 className="text-[1.4rem] font-display font-serif italic mb-4">"Cada puntada cuenta una historia, cada tejido guarda un recuerdo"</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> {/* cols here distribute the insets Original was "lg:grid-cols-4" */}
        {[
          { id: 'dressitos', title: 'Dressitos', desc: 'Moda Infantil Hecha a Mano', img: '/images/products/dressitos/Dressitos_camisetafloresybolso_final.jpg' },
          { id: 'fallastyle', title: 'Fallastyle', desc: 'Tradición Valenciana Única', img: '/images/products/fallastyle/tela_fallera/bolsos/Fallastyle_Retalbolso_7.jpg' },
          // { id: 'arreglos', title: 'Arreglos', desc: 'Segunda Vida a tus Prendas', img: '/images/products/arreglos/Dressitos_pajarita1_final.jpg  ' }, //Comment this out to remove the inset from homepage
          { id: 'a-tu-medida', title: 'A tu medida', desc: 'Confección Exclusiva', img: '/images/products/a-tu-medida/Medida_Bolso de yute.jpg' }
        ].map((item) => (
          <div key={item.id} className="group relative h-[450px] overflow-hidden rounded-[3rem] cursor-pointer shadow-xl transition-all hover:shadow-2xl" onClick={() => onNavigate(item.id)}>
            <img src={item.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">{item.desc}</p>
              <h3 className="text-2xl font-display font-bold">{item.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explorar <span className="material-symbols-outlined !text-[18px]">arrow_forward</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const ENABLE_AI_ASSISTANT = false;

  // History-aware navigation: push/pop state so browser back/forward works
  const handleTabChange = (tab: string) => {
    const url = `#${tab}`;
    try { window.history.pushState({ tab }, '', url); } catch(e) { /* ignore */ }
    setCurrentTab(tab);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };
 
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    const url = `#product-${product.id}`;
    try { window.history.pushState({ productId: product.id, tab: currentTab }, '', url); } catch (e) { /* ignore */ }
    window.scrollTo(0, 0);
  };
 
  // Initialize from URL hash and listen for back/forward (popstate)
  useEffect(() => {
    const parseHash = () => {
      const h = (window.location.hash || '').toString();
      if (h.startsWith('#product-')) {
        const id = h.replace('#product-', '');
        const all = [...DRESSITOS_PRODUCTS, ...FALLASTYLE_PRODUCTS];
        const p = all.find(x => x.id === id) || null;
        setSelectedProduct(p);
        if (p) {
          setCurrentTab(p.categories && p.categories.length > 0 ? p.categories[0] : 'dressitos');
          return;
        }
      }
      if (h && h.length > 1 && !h.startsWith('#product-')) {
        setSelectedProduct(null);
        setCurrentTab(h.replace('#', ''));
        return;
      }
      // default
      setSelectedProduct(null);
    };

    // ensure initial history state aligns with current tab/hash
    try {
      const initialTab = window.location.hash ? window.location.hash.replace('#', '') : currentTab;
      window.history.replaceState({ tab: initialTab }, '', window.location.hash || `#${initialTab}`);
    } catch (e) { /* ignore */ }

    parseHash();

    const onPop = (e: PopStateEvent) => {
      const s = (e.state || {});
      if (s && s.productId) {
        const all = [...DRESSITOS_PRODUCTS, ...FALLASTYLE_PRODUCTS];
        const p = all.find(x => x.id === s.productId) || null;
        setSelectedProduct(p);
        setCurrentTab(s.tab || 'inicio');
        return;
      }
      if (s && s.tab) {
        setSelectedProduct(null);
        setCurrentTab(s.tab);
        return;
      }
      // fallback to hash parsing
      parseHash();
    };

    const onHashChange = () => parseHash();

    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleAiConsult = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    const result = await getArtisanAdvice(aiInput);
    setAiMessage(result || '');
    setIsAiLoading(false);
    setAiInput('');
  };

  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => window.history.back()} 
        />
      );
    }

    switch (currentTab) {
      case 'inicio':
        return <Home onNavigate={handleTabChange} />;
      case 'a-tu-medida':
        return (
          <div className="min-h-screen bg-background-light dark:bg-background-dark pb-40">
            {/* Header Hero */}
            <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden mb-32">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("/images/products/a-tu-medida/sorolla_playa de valencia.jpg")' }} />
              <div className="relative z-10 text-center px-6 max-w-4xl animate-reveal">
                <span className="inline-block px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-white bg-primary/80 rounded-full backdrop-blur-md shadow-2xl">Exclusividad & Elegancia</span>
                <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-8 drop-shadow-2xl">A tu Medida</h1>
                <p className="text-xl md:text-2xl text-white/90 font-serif italic max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                  A tu medida con prendas hechas exclusivamente para ti      
                </p>
                <div className="mt-12 flex justify-center gap-6">
                  <button onClick={() => setCurrentTab('contacto')} className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-primary hover:text-white transition-all">Pedir Cita Previa</button>
                  {/* <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs backdrop-blur-sm hover:border-white transition-all">Ver Galería</button> */}
                </div>
              </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                    <img src="/images/products/a-tu-medida/Medida_Bolso de yute_modelo1.jpg" className="w-full h-full object-cover" alt="Measuring" />
                  </div>
                  <div className="absolute -bottom-12 -right-12 size-64 bg-primary/10 rounded-[4rem] -z-0 blur-3xl" />
                </div>
                <div>
                   <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">El Proceso Artesano</span>
                   <h2 className="text-5xl font-display font-bold mb-10 leading-tight text-text-main dark:text-white">Una experiencia diseñada <br/> solo para ti</h2>
                   <p className="text-lg text-text-secondary dark:text-gray-300 mb-12 leading-relaxed">
                     Entendemos la moda como una extensión de tu personalidad. En el servicio "A tu medida", no hay límites. Desde la elección inicial de la seda valenciana o el lino más puro, hasta el último ajuste en la sisa, cada detalle se supervisa personalmente por Elvira.
                   </p>
                   <ul className="space-y-6 mb-12">
                     {[
                       'Diseño de patrón exclusivo según tu silueta',
                       'Acceso a muestrarios de sedas de edición limitada',
                       'Dos a tres pruebas de ajuste en nuestro atelier',
                       'Acabados a mano con técnicas de alta costura'
                     ].map((item, idx) => (
                       <li key={idx} className="flex gap-4 items-start">
                         <span className="material-symbols-outlined text-primary">verified</span>
                         <span className="font-bold text-text-main dark:text-gray-200">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="mb-40">
                <div className="text-center mb-24">
                  <h3 className="text-4xl font-display font-bold mb-4">Tu viaje creativo</h3>
                  <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <BespokeStep number="01" icon="calendar_month" title="Cita Previa" desc="Nos conocemos en el atelier para entender tu visión, estilo y necesidades." />
                  <BespokeStep number="02" icon="draw" title="Diseño & Medidas" desc="Esbozamos el concepto y tomamos medidas exactas para un ajuste perfecto." />
                  <BespokeStep number="03" icon="palette" title="Tejidos Nobles" desc="Seleccionamos juntos las texturas, colores y fibras que darán vida a la pieza." />
                  <BespokeStep number="04" icon="auto_fix_high" title="Pruebas & Entrega" desc="Realizamos los ajustes necesarios para que la prenda sea tu segunda piel." />
                </div>
              </div>

              <div className="bg-primary/5 rounded-[4rem] p-16 md:p-24 text-center border border-primary/10 shadow-inner">
                <h3 className="text-4xl font-display font-bold mb-8 italic">"La verdadera elegancia reside en lo que está hecho con calma."</h3>
                <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-gray-300 mb-12">
                  ¿Tienes una ocasión especial o buscas esa prenda única que no encuentras en las tiendas? Permíteme asesorarte sin compromiso.
                </p>
                <button onClick={() => setCurrentTab('contacto')} className="bg-primary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all">Comenzar mi proyecto</button>
              </div>
            </div>
          </div>
        );
      case 'dressitos':
        return (
          <ProductGallery 
            title="Dressitos"
            products={DRESSITOS_PRODUCTS}
            heroData={{
              subtitle: 'Complementos infantiles',
              img: '/images/products/dressitos/Dressitos_camisetafloresybolso_modelo_final.jpg'
            }}
            onSelectProduct={handleSelectProduct}
          />
        );
      case 'fallastyle':
        return (
          <ProductGallery 
            title="Fallastyle"
            products={FALLASTYLE_PRODUCTS}
            showTraditionSection
            heroData={{
              subtitle: 'Vive las fiestas tradicionales con otro estilo',
              img: '/images/products/fallastyle/tela_fallera/Fallastyle_retal4.jpg'
            }}
            onSelectProduct={handleSelectProduct}
          />
        );
      // case 'arreglos': //This builds up the "arreglos" page. It's only the page. The inset in homepage still shows even if this is commented out.
      //   return (
      //     <div className="min-h-screen bg-background-light dark:bg-background-dark pb-40">
      //       <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden mb-20 bg-[#221810]">
      //         <img src="/images/products/arreglos/Dressitos_pajarita1_final.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm" alt="Alterations" />
      //         <div className="relative z-10 text-center px-6 animate-reveal">
      //           <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-white bg-primary/80 rounded-full">Servicios Profesionales</span>
      //           <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">Pequeños Arreglos</h1>
      //           <p className="text-white/80 max-w-2xl mx-auto">Segunda vida a tus prendas favoritas con acabados invisibles.</p>
      //         </div>
      //       </div>
      //       <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      //         {ARREGLOS_SERVICES.map(service => (
      //           <div key={service.id} className="group relative overflow-hidden rounded-[3rem] h-[550px] bg-white shadow-xl hover:shadow-2xl transition-all">
      //              <img src={service.image} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80" alt={service.name} />
      //              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent" />
      //              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur px-6 py-2 rounded-full font-black text-primary text-[10px] tracking-widest uppercase shadow-lg">{service.priceRange}</div>
      //              <div className="absolute bottom-10 left-10 right-10 text-white">
      //                 <div className="flex items-center gap-4 mb-4">
      //                   <div className="size-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform"><span className="material-symbols-outlined !text-3xl text-white">{service.icon}</span></div>
      //                   <h3 className="text-2xl font-bold font-display">{service.name}</h3>
      //                 </div>
      //                 <p className="text-sm text-gray-300 leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{service.description}</p>
      //                 <button className="text-[10px] uppercase tracking-widest font-black border-b border-primary pb-1 hover:text-primary transition-colors">Solicitar Presupuesto</button>
      //              </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   );
      case 'sobre-mi':
        return (
          <div className="pt-40 px-6 pb-40 max-w-[1200px] mx-auto">
            
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 gap-x-3 lg:gap-x-4 items-start py-24">
                <div className="relative">
                   <div className="aspect-[4/5] max-w-[280px] lg:max-w-[420px] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                     <img src="/images/team/costurera_portrait_2.png" className="w-full h-full object-cover" alt="Encarna Guadas Sanz" />
                   </div>
                </div>
                <div>
                   <span className="text-primary font-black uppercase tracking-[0.4em] text-[14px] mb-6 block">Maestra Costurera</span>
                   <h1 className="text-4xl font-display font-bold mb-8">Encarna Guadas Sanz</h1>
                   <div className="space-y-6 text-lg text-text-secondary leading-relaxed text-justify">
                     <p>Desde la adolescencia fui testigo de la labor y dedicación al mundo de la confección a través de mi madre… Este proyecto es un homenaje a ella, que no solo crió a cuatro hijos, sino que trabajó como costurera para contribuir a la economía familiar.</p>
                     <p>Horas y horas detrás de la máquina de coser, puntada a puntada, sus proyectos tomaban forma, y yo, sin darme cuenta, mientras crecía, no era consciente de que esa tarea en un futuro sería parte importante de mi vida. Ciertamente, hoy es una tarea que desempeño con ilusión, y todo lo que inconscientemente fui aprendiendo sale a la luz de forma mágica.</p>
                     {/* <p className="italic font-display text-primary text-3xl pt-8 leading-snug">"No solo coso prendas, coso recuerdos que perduran en el tiempo."</p> */}
                   </div>
                </div>
             </div>

             {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-24">
                <div className="relative">
                   <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                     <img src="/images/team/Gemini_imagen_Sorolla_1.png" className="w-full h-full object-cover" alt="Encarna Guadas Sanz" />
                   </div>
                </div>
                <div>
                    <h1 className="text-2xl font-display font-bold mb-8">Creativa Textil Artesanal...</h1>
                   <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                     <p>pretende llegar un paso más allá, pretendo saltar las barreras de una excesiva producción en masa e insostenible, por los requerimientos de materias primas naturales que son finitas y no respetamos, por la baja originalidad en los diseños y nulo respeto en los procesos de fabricación en el que intervienen mano de obra especialmente maltratada, tanto en las condiciones de trabajo como en los salarios retribuidos.</p>
                     <p>No es tarea fácil, puede ser frustrante y desmotivador, es verdad, a pesar de ello, todos mis esfuerzos van encaminados a llegar a nuevas metas, para lo cual busco</p>
                     <p>La originalidad, lo que conlleva descartar proyectos demasiado sencillos y repetitivos.</p>
                     <p>Calidad, tanto en la elaboración como en los materiales, lo que conduce a una producción más individualizada y sostenible.</p>
                     <p>Satisfacer a mis clientes con prendas y accesorios, ni muy simples ni muy sofisticados sino sencillos y auténticos, con los que se sientan únicos.</p>
                   </div>
                </div>
             </div> */}

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0 gap-x-3 lg:gap-x-4 items-start py-24">
                <div className="relative">
                   <div className="aspect-[4/5] max-w-[280px] lg:max-w-[420px] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                     <img src="/images/team/costurera_taller.png" className="w-full h-full object-cover" alt="Encarna Guadas Sanz" />
                   </div>
                </div>
                <div>
                    <h1 className="text-4xl font-display font-bold mb-8">Creativa Textil Artesanal</h1>
                   <div className="space-y-6 text-lg text-text-secondary leading-relaxed text-justify">
                     <p>Es una mirada a lo especial, a lo individual y personal.</p>
                     <p>Es una mirada a ti, mi siguiente cliente especial, en el que vacío toda mi creatividad, tu idea va cogiendo forma con la expresión de tus inquietudes, tus creencias y deseos.</p>
                     <p>En nuestro mundo globalizado, todo tiende a quedarse en un nivel que lo iguala todo, carente de corazón y autenticidad.</p>
                     <p>Existo para ayudarte a convertirte en una persona resiliente, optimista, adaptable y segura de sí misma.</p>
                     <p></p>
                   </div>
                </div>
             </div>

             {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-24">
                <div className="relative">
                   <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                     <img src="/images/team/Gemini_imagen_Sorolla_1.png" className="w-full h-full object-cover" alt="Encarna Guadas Sanz" />
                   </div>
                </div>
                <div>
                    <h1 className="text-2xl font-display font-bold mb-8">Con Creativa Textil Artesanal...</h1>
                   <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                     <p>puedes llegar a interiorizar una forma de ser y comportamiento  frente a los demás, que cumple perfectamente todos los extremos:</p>
                     <p>Cálida o audaz, con materiales naturales y resistentes en el tiempo.</p>
                     <p>Poética o directa, dejándote llevar por lo especialmente armonioso o sin matices.</p>
                     <p>Minimalista o expresiva, con líneas y colores básicos o multiplicidad al máximo de expresividad</p>
                     <p>Rebelde o protectora , que te haga destacar frente a los demás pero con el máximo respeto, sin estridencias.</p>
                     <p></p>
                     <p className="italic font-display text-primary text-3xl pt-8 leading-snug">Puedes elegir entre todas ellas y sentirte una persona especial y auténtica!!!</p>
                   </div>
                </div>
             </div> */}


          </div>
        );
      case 'contacto':
        return (
          <div className="pt-40 px-6 pb-40 max-w-[1200px] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                   <h1 className="text-7xl font-display font-bold mb-12">Hablemos</h1>
                   <div className="space-y-12">
                      <div className="flex gap-8 items-center group">
                         <div className="size-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><span className="material-symbols-outlined !text-3xl">mail</span></div>
                         <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-1">Email Directo</p>
                            <p className="text-2xl font-bold">creativatextilart@gmail.com</p>
                         </div>
                      </div>
                      <div className="flex gap-8 items-center group">
                         <div className="size-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><span className="material-symbols-outlined !text-3xl">location_on</span></div>
                         <div>
                            <p className="text-[10px] uppercase tracking-widest text-text-secondary mb-1">Ubicación</p>
                            <p className="text-2xl font-bold">Valencia, España</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Esta parte es el formulario de contacto. El diseño es simple, con campos para nombre, email y mensaje, y un botón para enviar. Al enviar el formulario, se muestra una alerta de agradecimiento. En una implementación real, este formulario debería conectarse a un backend para procesar los mensajes de los usuarios. Falta configurar el backend para manejar los envíos de mensajes. La idea es hacerlo con EmailJS.
                <div className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-2xl border border-primary/5">
                   <h3 className="text-2xl font-display font-bold mb-10">Envía un Mensaje</h3>
                   <form className="flex flex-col gap-8" onSubmit={e => { e.preventDefault(); alert('¡Gracias!'); }}>
                      <input className="border-b border-primary/20 focus:border-primary outline-none py-3 bg-transparent text-lg" placeholder="Nombre" required />
                      <input className="border-b border-primary/20 focus:border-primary outline-none py-3 bg-transparent text-lg" placeholder="Email" type="email" required />
                      <textarea className="border-b border-primary/20 focus:border-primary outline-none py-3 bg-transparent min-h-[120px] text-lg" placeholder="¿En qué puedo ayudarle?" required />
                      <button type="submit" className="bg-primary text-white py-6 rounded-full font-black uppercase tracking-widest text-xs mt-4 shadow-xl">Enviar al Taller</button>
                   </form>
                </div> */}

             </div>
          </div>
        );
      default:
        return <Home onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar currentTab={currentTab} onTabChange={handleTabChange} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNavigate={handleTabChange} />    

      {ENABLE_AI_ASSISTANT && ( 

      /* Luxury AI Assistant Concierge */
      <div className="fixed bottom-10 right-10 z-[100]">
        {!isAiOpen ? (
          <button onClick={() => setIsAiOpen(true)} className="flex items-center gap-4 bg-primary text-white p-2 pr-10 rounded-full shadow-2xl hover:scale-105 transition-all group">
            <div className="size-14 rounded-full bg-white text-primary flex items-center justify-center shadow-inner"><span className="material-symbols-outlined !text-[32px]">stylus_note</span></div>
            <div className="flex flex-col items-start">
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-80">Asesoría Directa</span>
              <span className="font-bold text-sm tracking-tight">Preguntar a Encarna</span>
            </div>
          </button>
        ) : (
          <div className="bg-white dark:bg-background-dark w-[350px] sm:w-[450px] rounded-[3rem] shadow-2xl border border-primary/10 overflow-hidden flex flex-col animate-reveal">
            <div className="bg-primary p-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined !text-[36px]">stylus_note</span>
                <div>
                  <p className="font-display font-bold text-2xl leading-none">Atelier Encarna</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-1">Soporte Artesano</p>
                </div>
              </div>
              <button onClick={() => setIsAiOpen(false)}><span className="material-symbols-outlined !text-3xl text-white">close</span></button>
            </div>
            <div className="p-8 h-[400px] overflow-y-auto flex flex-col gap-6 bg-[#FAF9F6] dark:bg-black/20">
              <div className="bg-white dark:bg-white/5 p-6 rounded-3xl rounded-tl-none shadow-sm text-sm italic font-serif">"¿En qué detalle puedo ayudarle hoy?"</div>
              {aiMessage && <div className="bg-primary text-white p-6 rounded-3xl rounded-tl-none shadow-xl text-sm leading-relaxed">{aiMessage}</div>}
              {isAiLoading && <div className="flex gap-2 p-4 justify-center"><div className="size-2 bg-primary rounded-full animate-bounce" /></div>}
            </div>
            <div className="p-6 bg-white dark:bg-white/5 border-t border-primary/5 flex gap-3 items-center">
              <input value={aiInput} onChange={(e) => setAiInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAiConsult()} placeholder="Escriba aquí..." className="flex-grow bg-[#FAF9F6] dark:bg-white/10 border-none rounded-full px-6 py-4 text-sm focus:ring-1 focus:ring-primary outline-none" />
              <button onClick={handleAiConsult} disabled={isAiLoading} className="bg-primary text-white size-14 rounded-full flex items-center justify-center shadow-lg shrink-0"><span className="material-symbols-outlined !text-3xl">send</span></button>
            </div>
          </div>
        )}
      </div>    )}
    </div>
  );          
};


export default App;
