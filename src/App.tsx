import { useState } from 'react';
import { 
  Clock, MapPin, Phone, Calendar, ChevronRight, Star, ChevronDown, 
  CheckCircle2, Wine, Flame, Sparkles, X, Award, ShieldCheck, Copy
} from 'lucide-react';

interface Dish {
  id: string;
  name: string;
  category: 'tasting' | 'mar' | 'fuego' | 'postres' | 'cava';
  desc: string;
  technique: string;
  pairing: string;
  price: number;
  image: string;
  tag?: string;
  allergens: string[];
}

const DISHES: Dish[] = [
  {
    id: 'ceviche-negro',
    name: 'Ceviche Volcánico al Ají Negro',
    category: 'mar',
    desc: 'Corvina de profundidad curada en sal marina, leche de tigre emulsionada con ají negro de la Amazonía y ceniza de cebolla perla.',
    technique: 'Curado en frío 25 min, emulsión nitro',
    pairing: 'Chardonnay Gran Reserva del Valle del Maule',
    price: 34,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    tag: 'Firma del Chef',
    allergens: ['Pescado'],
  },
  {
    id: 'pulpo-brasas',
    name: 'Pulpo de Roca a la Leña de Canelo',
    category: 'mar',
    desc: 'Tentáculo braseado a fuego vivo, muselina de choclo tierno ahumado, crocante de plátano verde y aceite de hierba luisa.',
    technique: 'Cocción al vacío 4h a 72°C + brasa directa',
    pairing: 'Albariño Rías Baixas 2023',
    price: 38,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Recomendado',
    allergens: ['Moluscos'],
  },
  {
    id: 'costilla-andina',
    name: 'Costilla de Res Andina 48 Horas',
    category: 'fuego',
    desc: 'Costilla angus estofada lentamente en reducción de chicha de jora y panela, acompañada de puré sedoso de papas nativas y zanahorias baby confitadas.',
    technique: 'Sous-vide 48 horas a 64°C, glaseado al soplete',
    pairing: 'Malbec de Altura Mendoza 2021',
    price: 46,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Cocción Lenta',
    allergens: ['Sulfitos'],
  },
  {
    id: 'lechoncito-crispy',
    name: 'Cochinillo Glaseado al Maracuyá',
    category: 'fuego',
    desc: 'Piel ultra crocante con carne deshebrable, emulsión agridulce de maracuyá silvestre y polvo de chicharrón andino.',
    technique: 'Prensado 12h, horneado convección 230°C',
    pairing: 'Syrah Valle de Colchagua',
    price: 42,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tag: 'Especialidad',
    allergens: ['Cerdo'],
  },
  {
    id: 'menu-degustacion-11',
    name: 'Experiencia Cronos (Menú Degustación 9 Tiempos)',
    category: 'tasting',
    desc: 'Un recorrido sensorial completo guiado por nuestro Chef Ejecutivo a través de los 4 ecosistemas de Ecuador: Galápagos, Costa, Andes y Amazonía.',
    technique: 'Secuencia de 9 pases maridados individualmente',
    pairing: 'Maridaje Signature de 6 etiquetas internacionales incluido',
    price: 135,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Experiencia Magna',
    allergens: ['Mariscos', 'Lácteos', 'Sulfitos'],
  },
  {
    id: 'cacao-origen',
    name: 'Texturas de Cacao Nacional 85%',
    category: 'postres',
    desc: 'Mousse aireado de chocolate Arriba, esponja de nibs garrapiñados, helado de mucílago y cristal de sal marina de Salinas.',
    technique: 'Criogenia con nitrógeno líquido y esferificación',
    pairing: 'Oporto Tawny 20 Años',
    price: 22,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    tag: 'Cacao Fino de Aroma',
    allergens: ['Lácteos'],
  },
  {
    id: 'humo-canelo',
    name: 'Cóctel Ancestral Humo & Canelo',
    category: 'cava',
    desc: 'Destilado de caña artesanal infusionado con corteza de canelo, cordial de mortiño silvestre, bitter de hierbas andinas y ahumado en mesa con palo santo.',
    technique: 'Ahumado con campana de cristal y decantación en frío',
    pairing: 'Aperitivo de bienvenida',
    price: 19,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tag: 'Mixología Botánica',
    allergens: ['Sulfitos'],
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 3-Step Interactive Booking Engine State
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3 | 4>(1);
  const [partySize, setPartySize] = useState<number>(2);
  const [reservationDate, setReservationDate] = useState<string>('2026-09-12');
  const [reservationTime, setReservationTime] = useState<string>('20:30');
  const [selectedZone, setSelectedZone] = useState<'terraza' | 'fuego' | 'cava'>('fuego');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialDiet, setSpecialDiet] = useState<string>('');
  const [bookingCode, setBookingCode] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const filteredDishes = selectedCategory === 'all' 
    ? DISHES 
    : DISHES.filter(d => d.category === selectedCategory);

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingCode(`KURE-2026-${randomNum}-VIP`);
    setBookingStep(4);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const zones = [
    {
      id: 'fuego' as const,
      name: 'Salón del Fuego',
      subtitle: 'Frente a la cocina abierta del Chef',
      highlight: 'Atmósfera vibrante y servicio en mesa directo de los cocineros',
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      tag: 'Más Exclusivo',
    },
    {
      id: 'terraza' as const,
      name: 'Terraza Jardín Andina',
      subtitle: 'Vista nocturna y brisa fresca',
      highlight: 'Calefacción con chimeneas de piedra volcánica y coctelería exterior',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      tag: 'Romántico',
    },
    {
      id: 'cava' as const,
      name: 'Cava Privada Subterránea',
      subtitle: 'Solo 12 asientos por turno',
      highlight: 'Atención personalizada por el Head Sommelier y guarda de añadas',
      icon: <Wine className="w-5 h-5 text-rose-400" />,
      tag: 'Cupo Ultra Limitado',
    },
  ];

  const faqs = [
    { q: '¿Tienen código de vestimenta?', a: 'Recomendamos vestimenta elegante o smart-casual. Por respeto a la atmósfera del lugar, no permitimos ropa deportiva, calzado de playa ni gorras.' },
    { q: '¿Cómo funciona el Menú Degustación para personas con alergias?', a: 'Adaptamos 100% de los pases a personas celíacas, vegetarianas o con alergias a mariscos si se indica con 24h de antelación en el formulario de reserva.' },
    { q: '¿Cuál es la política de cancelación o retraso?', a: 'Mantenemos su mesa reservada por 20 minutos de cortesía. Las cancelaciones no tienen costo con hasta 6 horas de anticipación.' },
    { q: '¿Disponen de servicio de Valet Parking?', a: 'Sí, disponemos de Valet Parking privado y vigilancia de seguridad permanente para todos nuestros invitados sin costo adicional.' }
  ];

  return (
    <div className="min-h-screen bg-[#060403] text-zinc-100 font-sans selection:bg-amber-600/30 selection:text-white">
      
      {/* Top Luxury Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060403]/80 backdrop-blur-xl border-b border-amber-950/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl tracking-[0.25em] font-bold text-white group-hover:text-amber-200 transition-colors">
              KURE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </a>
          
          <div className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-semibold text-zinc-400">
            <a href="#carta" className="hover:text-amber-300 transition-colors">Nuestra Carta</a>
            <a href="#filosofia" className="hover:text-amber-300 transition-colors">Filosofía</a>
            <a href="#zonas" className="hover:text-amber-300 transition-colors">Ambientes</a>
            <a href="#reservas" className="hover:text-amber-300 transition-colors">Reservas</a>
          </div>

          <a 
            href="#reservas" 
            className="px-5 py-2.5 rounded-full border border-amber-500/40 bg-amber-950/30 hover:bg-amber-500 hover:text-black text-amber-200 text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(217,119,6,0.15)]"
          >
            Reservar Mesa
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80" 
            alt="KURE Haute Cuisine" 
            className="w-full h-full object-cover opacity-30 scale-105 transform origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060403] via-[#060403]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060403] via-transparent to-[#060403]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Guía Gastronómica 2026 &mdash; Cocina de Autor</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1]">
            El Arte de lo <br />
            <span className="italic font-light text-amber-200/90">Trascendente.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Una inmersión sensorial en los sabores ancestrales de los Andes y el Pacífico ecuatoriano, esculpidos con técnica de vanguardia europea.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#reservas" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-wider uppercase text-xs transition-all shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2"
            >
              <span>Asegurar Mesa VIP</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a 
              href="#carta" 
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-700 hover:border-amber-500/50 bg-zinc-900/60 text-zinc-200 hover:text-white font-semibold tracking-wider uppercase text-xs transition-all"
            >
              Explorar Carta
            </a>
          </div>

          <div className="pt-12 grid grid-cols-3 max-w-lg mx-auto border-t border-zinc-800/80 text-center">
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-white block">9 Tiempos</span>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Menú Cronos</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-white block">180+</span>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Etiquetas Cava</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-white block">4.9 / 5.0</span>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Crítica Especializada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Categorized Menu */}
      <section id="carta" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Propuesta Culinaria
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Creaciones del Chef.
            </h2>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Seleccione un plato para inspeccionar la técnica de cocción, notas de cata y maridaje sugerido.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
            {[
              { id: 'all', label: 'Toda la Carta' },
              { id: 'tasting', label: 'Degustación' },
              { id: 'mar', label: 'Entradas de Mar' },
              { id: 'fuego', label: 'Carnes & Brasa' },
              { id: 'postres', label: 'Postres' },
              { id: 'cava', label: 'Mixología' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-950/20 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                {dish.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-amber-300 backdrop-blur-md border border-amber-500/30">
                    {dish.tag}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 text-lg font-serif font-bold text-white px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                  ${dish.price} USD
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[11px] text-zinc-500">Técnica: {dish.technique.split(',')[0]}</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver Ficha &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedDish(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full">
              <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {selectedDish.tag || 'Alta Cocina'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {selectedDish.name}
                  </h3>
                </div>
                <span className="text-2xl font-serif font-bold text-amber-300 shrink-0">
                  ${selectedDish.price} USD
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedDish.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    <Flame className="w-4 h-4" />
                    <span>Técnica Gastronómica</span>
                  </div>
                  <p className="text-xs text-zinc-300">{selectedDish.technique}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    <Wine className="w-4 h-4" />
                    <span>Maridaje Sugerido</span>
                  </div>
                  <p className="text-xs text-zinc-300">{selectedDish.pairing}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Alérgenos: {selectedDish.allergens.join(', ')}</span>
                </div>
                <a
                  href="#reservas"
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Pedir en Reserva
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Philosophy Section */}
      <section id="filosofia" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-amber-950/60 bg-gradient-to-b from-zinc-900/60 via-zinc-950/80 to-[#060403] p-8 sm:p-14 lg:p-20 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Nuestra Filosofía
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              La Alquimia del Fuego <br />
              <span className="italic font-light text-amber-200/90">&amp; la Memoria Ancestral.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              En KURE no concebimos la gastronomía como un espectáculo efímero, sino como un diálogo riguroso entre la geografía de los Andes, la feracidad de la Amazonía y el misterio del Océano Pacífico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-zinc-800/80">
            <div className="space-y-3">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">01 / Origen Trazable</span>
              <h3 className="text-xl font-serif font-bold text-white">4 Ecosistemas Nativos</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Trabajamos en simbiosis directa con pescadores artesanales de Manabí, recolectores de cacao fino de aroma en Los Ríos y comunidades andinas que cultivan papas nativas milenarias.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">02 / Dominio Técnico</span>
              <h3 className="text-xl font-serif font-bold text-white">Fuego Vivo &amp; Ciencia</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Brasa viva con leña de canelo y eucalipto aromático, complementada con técnicas criogénicas, fermentaciones en vasijas de barro y reducciones pacientes de 48 horas.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider block">03 / Sostenibilidad</span>
              <h3 className="text-xl font-serif font-bold text-white">Compromiso Circular</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Aprovechamiento integral del producto bajo el principio de residuo cero. Desde las cenizas vegetales hasta las infusiones botánicas de nuestra cava privada.
              </p>
            </div>
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-serif italic text-amber-200/90">
              "Cocinar no es alimentar; es rescatar del olvido los sabores que forjaron nuestra identidad y llevarlos al mañana."
            </p>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest shrink-0 font-semibold">
              &mdash; Chef Ejecutivo KURE
            </span>
          </div>
        </div>
      </section>

      {/* Ambiances / Zones Showcase */}
      <section id="zonas" className="py-24 bg-zinc-950 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Arquitectura & Hospitalidad
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Tres Espacios, Una Pasión.
            </h2>
            <p className="text-sm text-zinc-400">
              Cada rincón de KURE fue concebido con materiales nobles: piedra volcánica de Ilaló, maderas recuperadas y luz íntima diseñada para la conversación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zones.map((zone) => (
              <div 
                key={zone.id}
                className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 space-y-4 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      {zone.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {zone.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">{zone.name}</h3>
                  <p className="text-xs font-mono text-zinc-500">{zone.subtitle}</p>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-2">
                    {zone.highlight}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedZone(zone.id);
                    const el = document.getElementById('reservas');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl border border-zinc-700 hover:border-amber-500 text-xs font-semibold text-zinc-200 hover:text-white transition-all text-center"
                >
                  Seleccionar esta zona
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Interactive Booking Engine */}
      <section id="reservas" className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="rounded-3xl border border-amber-500/30 bg-zinc-900/70 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Sistema de Reservas en Línea
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Asegure su Velada.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Disponibilidad confirmada en tiempo real. Proceso 100% interactivo.
            </p>
          </div>

          {/* Stepper Header (Only when not finished) */}
          {bookingStep < 4 && (
            <div className="flex items-center justify-between max-w-md mx-auto mb-10 pb-6 border-b border-zinc-800">
              {[
                { step: 1, label: 'Parámetros' },
                { step: 2, label: 'Ambiente' },
                { step: 3, label: 'Confirmación' },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    bookingStep >= s.step 
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20' 
                      : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {s.step}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${
                    bookingStep >= s.step ? 'text-white font-semibold' : 'text-zinc-500'
                  }`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STEP 1: Party, Date, Time */}
          {bookingStep === 1 && (
            <div className="space-y-8 animate-fadeIn">
              {/* Party Size Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Número de Comensales
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPartySize(n)}
                      className={`py-3 rounded-xl text-sm font-bold transition-all ${
                        partySize === n
                          ? 'bg-amber-500 text-black shadow-md'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {n} {n === 1 ? 'Persona' : 'Pax'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Fecha de la Visita
                  </label>
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Turno Horario
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['19:30', '20:30', '21:30', '22:15'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setReservationTime(t)}
                        className={`py-3 rounded-xl text-xs font-mono font-semibold transition-all ${
                          reservationTime === t
                            ? 'bg-amber-500 text-black font-bold'
                            : 'bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        {t} hrs
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Continuar a Selección de Zona</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Zone Selection */}
          {bookingStep === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-base font-bold text-white mb-2">Seleccione el Ambiente de su Mesa</h3>
                <p className="text-xs text-zinc-400">Cada espacio ofrece una acústica y perspectiva culinaria diferente.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedZone === zone.id
                        ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                        : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        {zone.icon}
                        {selectedZone === zone.id && (
                          <CheckCircle2 className="w-5 h-5 text-amber-400" />
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white">{zone.name}</h4>
                      <p className="text-xs text-zinc-400">{zone.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setBookingStep(1)}
                  className="px-6 py-3 rounded-full text-zinc-400 hover:text-white text-xs font-semibold"
                >
                  &larr; Volver
                </button>
                <button
                  type="button"
                  onClick={() => setBookingStep(3)}
                  className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Datos de Contacto</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details & Submit */}
          {bookingStep === 3 && (
            <form onSubmit={handleConfirmReservation} className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-500 font-mono block">Resumen de Mesa:</span>
                  <span className="font-bold text-white">{partySize} Comensales &bull; {reservationDate} a las {reservationTime} hrs</span>
                </div>
                <span className="text-amber-400 font-semibold uppercase font-mono">
                  {zones.find(z => z.id === selectedZone)?.name}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Andrés Morales"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="andres@empresa.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+593 99 123 4567"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Ocasión Especial o Alergias
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Aniversario / Celiaco / Sin mariscos"
                    value={specialDiet}
                    onChange={(e) => setSpecialDiet(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="px-6 py-3 rounded-full text-zinc-400 hover:text-white text-xs font-semibold"
                >
                  &larr; Volver
                </button>
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20"
                >
                  Emitir Confirmación VIP
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmed Digital Pass (Ticket) */}
          {bookingStep === 4 && (
            <div className="text-center space-y-8 animate-fadeIn max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Mesa Confirmada con Éxito
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  ¡Le Esperamos, {guestName}!
                </h3>
                <p className="text-xs text-zinc-400 mt-2">
                  Hemos enviado los detalles a <span className="text-zinc-200 font-mono">{guestEmail}</span>.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-3xl bg-zinc-950 border border-amber-500/40 text-left space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="font-serif text-lg font-bold text-white tracking-widest">KURE</div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    PASE VIP CONFIRMADO
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-zinc-500 block font-mono">FECHA & TURNO</span>
                    <span className="text-zinc-200 font-semibold">{reservationDate} &bull; {reservationTime} hrs</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block font-mono">INVITADOS</span>
                    <span className="text-zinc-200 font-semibold">{partySize} Comensales</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block font-mono">ZONA</span>
                    <span className="text-zinc-200 font-semibold">{zones.find(z => z.id === selectedZone)?.name}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block font-mono">CÓDIGO DE RESERVA</span>
                    <span className="text-amber-400 font-mono font-bold">{bookingCode}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={copyCode}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? '¡Copiado!' : 'Copiar Código'}</span>
                  </button>
                  <span className="text-[10px] font-mono text-zinc-500">Presentar al llegar a recepción</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setBookingStep(1);
                  setGuestName('');
                  setGuestEmail('');
                }}
                className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
              >
                Hacer otra reserva
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Critiques / Social Proof */}
      <section className="py-24 bg-[#0a0705] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif text-white">Veredicto de la Crítica</h2>
            <div className="flex justify-center gap-1 text-amber-400">
              <Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" /><Star fill="currentColor" className="w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Una verdadera revelación. Logran elevar ingredientes tradicionales a un nivel internacional incomparable.", author: "Revista Gastronomía EC" },
              { quote: "El servicio es milimétrico y cada plato cuenta una leyenda. Definitivamente el mejor fine-dining de la capital.", author: "Guía Culinaria Sudamérica" },
              { quote: "La armonía perfecta entre técnica molecular y fuego ancestral. Su menú Cronos es una obra imprescindible.", author: "Food & Wine Digest" }
            ].map((t, i) => (
              <div key={i} className="p-8 border border-zinc-800/80 rounded-2xl bg-zinc-950/40 space-y-4">
                <p className="font-serif italic text-zinc-300 text-sm leading-relaxed">"{t.quote}"</p>
                <p className="text-xs tracking-widest uppercase font-mono text-amber-400">&mdash; {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl font-serif text-white">Todo lo que Debe Saber</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-800 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
              >
                <span className="text-base font-serif text-white">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <p className="text-xs text-zinc-400 leading-relaxed pb-4 animate-fadeIn">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-400 text-xs font-light">
          <div className="space-y-4">
            <div className="font-serif text-2xl tracking-[0.25em] font-bold text-white">
              KURE<span className="text-amber-500">.</span>
            </div>
            <p className="leading-relaxed max-w-sm">
              Gastronomía de autor y preservación de sabores ancestrales. Cocina abierta de martes a sábado.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-mono uppercase tracking-wider text-xs">Ubicación & Contacto</h4>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> Av. República de El Salvador & Moscú</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400" /> +593 99 824 9012 (Concierge)</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-mono uppercase tracking-wider text-xs">Horarios de Atención</h4>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /> Almuerzo: 13:00 - 16:00</p>
            <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400" /> Cena de Gala: 19:30 - 23:30</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
