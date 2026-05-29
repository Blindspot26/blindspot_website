import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-slate-200 bg-white" id="inicio">
      {/* Abstract structural glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-brand-primary/5 rounded-full filter blur-[140px] opacity-35 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Blindspot Logo" className="h-20 sm:h-24 md:h-28 object-contain" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] text-brand-secondary tracking-tight">
            Su aliado experto en <br className="hidden md:inline" />
            <span className="text-brand-primary">
              Servicios Gestionados de TI
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            El tiempo de inactividad cuesta a las empresas miles de dólares en pérdida de productividad y facturas de consultores de emergencia. Blindspot actúa como su departamento de TI integral y proactivo, suprimiendo fallas <strong className="text-brand-primary">antes de que causen fricción</strong>.
          </p>
        </div>

        {/* Grid actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
          <a
            href="#consecuencias-inactividad"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-primary text-white font-extrabold text-sm font-display tracking-tight hover:bg-brand-primary/95 transition-all shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            Conocer más
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Metrics Banner */}
        <div className="pt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl relative shadow-sm">
            
            <div className="text-center space-y-1">
              <div className="text-3xl font-extrabold text-brand-primary font-mono">-82%</div>
              <div className="text-xs text-slate-900 font-bold font-display">Reducción de fallas</div>
              <div className="text-[10px] text-slate-500 font-mono">Monitoreo proactivo continuo</div>
            </div>

            <div className="text-center space-y-1 md:border-l md:border-slate-200">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">98.4%</div>
              <div className="text-xs text-slate-900 font-bold font-display">Clientes satisfechos</div>
              <div className="text-[10px] text-slate-500 font-mono">Soporte técnico inmediato</div>
            </div>

            <div className="text-center space-y-1 md:border-l md:border-slate-200">
              <div className="text-3xl font-extrabold text-brand-primary font-mono">300+</div>
              <div className="text-xs text-slate-900 font-bold font-display">Horas ahorradas</div>
              <div className="text-[10px] text-slate-500 font-mono">Por empresa anualmente</div>
            </div>

            <div className="text-center space-y-1 md:border-l md:border-slate-200">
              <div className="text-3xl font-extrabold text-slate-900 font-mono flex items-center justify-center gap-1">
                100%
              </div>
              <div className="text-xs text-slate-900 font-bold font-display">Costos predecibles</div>
              <div className="text-[10px] text-slate-500 font-mono">Tarifa plana sin sorpresas</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
