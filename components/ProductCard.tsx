import React, { useState, useRef } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const swipeDetected = useRef(false);
  const { name, description, price, image, images, category, categories, tag } = product;
  
  const productImages = images && images.length > 0 ? images : [image];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handlePointerDown = (e: React.PointerEvent) => { touchStartX.current = e.clientX; swipeDetected.current = false; };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.clientX - touchStartX.current;
    if (Math.abs(delta) > 40) { swipeDetected.current = true; if (delta > 0) setCurrentIdx((prev) => (prev - 1 + productImages.length) % productImages.length); else setCurrentIdx((prev) => (prev + 1) % productImages.length); }
    touchStartX.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; swipeDetected.current = false; };
  const handleTouchEnd = (e: React.TouchEvent) => { if (touchStartX.current == null) return; const endX = e.changedTouches[0].clientX; const delta = endX - touchStartX.current; if (Math.abs(delta) > 40) { swipeDetected.current = true; if (delta > 0) setCurrentIdx((prev) => (prev - 1 + productImages.length) % productImages.length); else setCurrentIdx((prev) => (prev + 1) % productImages.length); } touchStartX.current = null; };
  
  return (
    <div className="group flex flex-col bg-white dark:bg-[#2a1f17] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5">
      {/* Image Container */}
      <div 
        className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-black/20 cursor-pointer"
        onClick={(e) => { if (swipeDetected.current) { swipeDetected.current = false; return; } onSelect?.(); }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={productImages[currentIdx]}
          alt={`${name} - imagen ${currentIdx + 1}`}
          onLoad={() => { /* allow fade */ }}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:scale-110 opacity-100"
          loading="lazy"
          key={currentIdx}
        />
        
        {/* Navigation Arrows (Visible on hover and if multiple images) */}
        {productImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md text-white flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity z-20 shadow-sm"
            >
              <span className="material-symbols-outlined !text-sm">chevron_left</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 size-8 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md text-white flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity z-20 shadow-sm"
            >
              <span className="material-symbols-outlined !text-sm">chevron_right</span>
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {productImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`size-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-primary w-4' : 'bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlays */}
        {/* This is the section that shows the "Nuevo", "Popular" or "Best Seller" tag on the top left corner of the product card. It only shows if the product has a tag. The tag is displayed in a small badge with a background color of primary and white text. The badge is positioned absolutely at the top left corner of the image container, with some padding and rounded corners for better aesthetics. The text inside the badge is uppercase, bold, and has a tracking to make it stand out more. Additionally, there is a shadow effect to give it some depth.
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-xl">
              {tag}
            </span>
          </div>
        )} */}
        
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-lg font-display font-bold text-text-main dark:text-white line-clamp-1 cursor-pointer hover:text-primary transition-colors"
            onClick={onSelect}
          >
            {name}
          </h3>
          {/* This is the section that shows the price of the product on the top right corner of the product card. The price is displayed in a larger font size and bold weight to make it stand out. The color of the price is set to primary to match the overall color scheme of the website. Additionally, there is a left margin to create some space between the price and the product name, ensuring a balanced layout.
          <span className="text-lg font-bold text-primary ml-4">
            {price.toFixed(0)}€
          </span> */}
        </div>
        
        {/* <p className="text-xs text-text-secondary dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed italic">
          "{description}"
        </p> */}

        <button 
          onClick={onSelect}
          className="mt-auto text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-[#d6651a] flex items-center gap-2 group/link cursor-pointer transition-colors w-fit"
        >
          Ver detalles 
          <span className="material-symbols-outlined !text-[14px] transition-transform group-hover/link:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
