import { Clock, MapPin, Phone, Calendar, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-950 text-brand-50 font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-widest font-bold text-white">
            KURE<span className="text-brand-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-medium text-brand-300">
            <a href="#menu" className="hover:text-white transition-colors">Menú</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
            <a href="#reservas" className="hover:text-white transition-colors">Reservas</a>
          </div>
          <button className="px-6 py-2.5 bg-brand-500 hover:bg-brand-400 text-white text-sm font-semibold tracking-wider uppercase rounded-sm transition-all shadow-[0_0_20px_rgba(163,122,106,0.3)] hover:shadow-[0_0_30px_rgba(163,122,106,0.5)]">
            Mesa VIP
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Fine Dining" 
            className="w-full h-full object-cover opacity-40 scale-105 transform origin-center animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-transparent to-brand-950/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-brand-500 font-medium tracking-[0.3em] uppercase text-sm mb-6 block">Cocina de Autor</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            El Arte de lo <br /> <span className="italic text-brand-200">Exquisito</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Una experiencia gastronómica inmersiva en el corazón de Ecuador. Sabores ancestrales redefinidos con técnica de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-semibold tracking-widest uppercase text-sm rounded-sm transition-all flex items-center justify-center gap-2">
              Ver Menú
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-brand-500/30 hover:bg-white/5 text-white font-semibold tracking-widest uppercase text-sm rounded-sm transition-all flex items-center justify-center gap-2">
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-32 relative bg-brand-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-brand-500 font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Nuestra Carta</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white">Platos de Autor</h2>
            </div>
            <p className="text-brand-300 max-w-md font-light leading-relaxed">
              Ingredientes locales seleccionados diariamente, transformados en obras de arte efímeras por nuestro Chef Ejecutivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ceviche Volcánico', desc: 'Pesca del día, leche de tigre al ají negro, ceniza de cebolla', price: '' },
              { name: 'Costilla Andina', desc: 'Braseada 48h, puré de papas nativas, reducción de chicha', price: '' },
              { name: 'Cacao Cero', desc: 'Texturas de cacao al 85%, nibs garrapiñados, helado de mucílago', price: '' }
            ].map((dish, i) => (
              <div key={i} className="group relative border border-white/5 p-8 hover:border-brand-500/30 transition-colors bg-white/[0.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <h3 className="text-2xl font-serif text-white mb-4">{dish.name}</h3>
                <p className="text-brand-300 font-light mb-8 h-16">{dish.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl text-brand-400 font-serif">{dish.price}</span>
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-colors">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050302] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-brand-300 font-light">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-2xl tracking-widest font-bold text-white mb-6">
              KURE<span className="text-brand-500">.</span>
            </div>
            <p className="max-w-md">Una experiencia gastronómica que desafía los sentidos. Reservas exclusivas para cenas de alto nivel.</p>
          </div>
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-500"/> Av. República de El Salvador</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-500"/> +593 99 123 4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Horarios</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-brand-500"/> Mar - Sab: 19:00 - 23:30</li>
              <li className="flex items-center gap-3"><Calendar className="w-4 h-4 text-brand-500"/> Dom - Lun: Cerrado</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
