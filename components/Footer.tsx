
import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-background-dark text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 mb-24">
          <div className="flex flex-col gap-6">
            <h2 className="font-display font-bold text-3xl tracking-tight">
              CREATIVA TEXTIL <span className="text-primary italic font-light">Artesanal</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs italic">
              "Cada puntada cuenta una historia, cada tejido guarda un recuerdo. Alta costura artesanal desde Valencia."
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Colecciones</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <button type="button" onClick={() => onNavigate('dressitos')} className="text-left hover:text-primary transition-colors">
                  Dressitos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('fallastyle')} className="text-left hover:text-primary transition-colors">
                  Fallastyle
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('a-tu-medida')} className="text-left hover:text-primary transition-colors">
                  A tu medida
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Enlaces</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <button type="button" onClick={() => onNavigate('sobre-mi')} className="text-left hover:text-primary transition-colors">
                Sobre mi
              </button>
              <button type="button" onClick={() => onNavigate('contacto')} className="text-left hover:text-primary transition-colors">
                Contacto
              </button>
            </div>
          </div>

          {/* <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Soporte</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Envíos Globales</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Guía de Fibras</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Preguntas</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Puntos de Venta</a></li>
            </ul>
          </div> */}

          {/* <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Atelier Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Reciba nuestras novedades sobre nuevas sedas y lanzamientos.</p>
            <div className="flex gap-2">
               <input className="bg-white/5 border-none rounded-full text-xs px-6 py-4 w-full focus:ring-1 focus:ring-primary" placeholder="Su email..." />
               <button className="bg-primary text-white size-12 rounded-full flex items-center justify-center hover:bg-accent transition-colors shrink-0">
                 <span className="material-symbols-outlined !text-[18px]">east</span>
               </button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2026 Creativa Textil Artesanal · Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-10 text-[10px] uppercase tracking-widest text-gray-500">
             {/* <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-primary transition-colors">Privacidad</a> */}
             <p className="flex items-center gap-2">
               Hecho en Valencia
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
