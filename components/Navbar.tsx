import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'dressitos', label: 'Dressitos' },
    { id: 'fallastyle', label: 'Fallastyle' },
    // { id: 'arreglos', label: 'Arreglos' },
    { id: 'a-tu-medida', label: 'A tu medida' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[10000] pointer-events-auto transition-all duration-500 ${
          scrolled ? 'glass border-b border-primary/10 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onTabChange('inicio')}
          >
            <div className="relative flex items-center justify-center text-primary">
               <span className="material-symbols-outlined !text-3xl">local_florist</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-display font-bold leading-none tracking-tight">
                Creativa Textil <br/><span className="text-primary font-normal italic">Artesanal</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-all relative py-2 ${
                  currentTab === item.id 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-primary dark:text-gray-300'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-6">
            <button className="hidden md:block hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button 
              className="lg:hidden flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined !text-[32px]">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header to avoid z-index/rendering issues */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-slate-950 z-[10050] transition-transform duration-700 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)}>
              <span className="material-symbols-outlined !text-[40px]">close</span>
            </button>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center flex-grow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-3xl font-display font-bold hover:text-primary transition-colors ${currentTab === item.id ? 'text-primary' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* <div className="mt-auto text-center">
            <p className="text-text-secondary uppercase tracking-widest text-xs mb-4">Atención bajo cita previa</p>
            <p className="font-bold text-xl">+34 600 000 000</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
