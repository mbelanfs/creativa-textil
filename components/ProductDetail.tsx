import React, { useEffect, useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const categories = product.categories && product.categories.length > 0
    ? product.categories
    : (product.category ? [product.category] : []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0 min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-40">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined !text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
          Volver a la colección
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-8">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-white dark:bg-white/5 border border-primary/5">
                <img 
                  src={productImages[activeImgIdx]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                  key={activeImgIdx}
                />
                
                {/* Navigation Arrows */}
                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx((prev) => (prev - 1 + productImages.length) % productImages.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20"
                    >
                      <span className="material-symbols-outlined !text-lg">chevron_left</span>
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx((prev) => (prev + 1) % productImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20"
                    >
                      <span className="material-symbols-outlined !text-lg">chevron_right</span>
                    </button>
                  </>
                )}
                
                {/* This is the section that shows the "Nuevo", "Popular" or "Best Seller" tag on the top left corner of the product card. It only shows if the product has a tag. The tag is displayed in a small badge with a background color of primary and white text. The badge is positioned absolutely at the top left corner of the image container, with some padding and rounded corners for better aesthetics. The text inside the badge is uppercase, bold, and has a tracking to make it stand out more. Additionally, there is a shadow effect to give it some depth.
                {product.tag && (
                  <div className="absolute top-8 left-8">
                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl shadow-2xl">
                      {product.tag}
                    </span>
                  </div>
                )} */}
              </div>

              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="flex gap-4 justify-center pt-4">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIdx(idx)}
                      className={`relative size-24 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImgIdx === idx ? 'border-primary scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">
              {categories.join(' · ')}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-text-main dark:text-white mb-8 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-6 mb-12 pb-12 border-b border-primary/10">
              
              {/* This is the section that shows the price of the product on the top right corner of the product detail page. The price is displayed in a larger font size and bold weight to make it stand out. The color of the price is set to primary to match the overall color scheme of the website. Additionally, there is a left margin to create some space between the price and the product name, ensuring a balanced layout.
              <span className="text-4xl font-bold text-primary">
                {product.price.toFixed(2)}€
              </span> */}

                {/* These are the stars for rating, but we don't have ratings yet, so I commented it out. We can add it later when we have that data. */}
               {/* <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined !text-xl fill-current">star</span>
                ))}
              </div> */}


            </div>

            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p className="text-xl font-display text-text-main dark:text-gray-200 leading-relaxed italic mb-8">
                "{product.description}"
              </p>
              {/* // This is a placeholder for the product details. You can replace it with actual details from the product object when available. */}
              {/* <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-primary/10 mb-12">
                <h3 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined !text-lg text-primary">info</span>
                  Detalles del Producto
                </h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 leading-loose">
                  {product.details || "Esta pieza ha sido confeccionada artesanalmente en nuestro taller de Valencia. Utilizamos únicamente materiales de primera calidad, respetando los procesos tradicionales de costura para asegurar una durabilidad y acabado excepcionales."}
                </p>
              </div> */}

            </div>

            {/* // This is a placeholder for the action buttons. You can implement the actual functionality (like adding to cart or contacting for customization) when you have those features ready. */}
            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#d6651a] transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined !text-xl">shopping_bag</span>
                Añadir al Carrito
              </button>
              
              <button className="flex-1 bg-white dark:bg-white/5 text-text-main dark:text-white border border-primary/20 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-primary transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined !text-xl">chat</span>
                Consultar Personalización
              </button>
            </div> */}

            {/* Artisanal Badge */}
            <div className="mt-16 flex items-center gap-4 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <div className="size-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">psychiatry</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest">Sello Artesana Valenciana</h4>
                <p className="text-[10px] text-text-secondary uppercase tracking-[0.1em]">Garantía de calidad y tradición local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
