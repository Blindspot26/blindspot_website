import React from 'react';
import { DollarSign, Clock, AlertTriangle, ExternalLink } from 'lucide-react';

export default function DowntimeCost() {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-brand-primary/20" id="consecuencias-inactividad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest text-brand-primary uppercase bg-brand-primary/20 px-3 py-1 rounded-full border border-brand-primary/30">
            Datos comprobados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            El verdadero costo del caos tecnológico
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            La inactividad de los sistemas de TI no es un simple inconveniente; es una fuga medible y constante de capital que detiene la productividad y afecta directamente el crecimiento de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Pérdida financiera directa</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Según un reporte de Gartner, el costo promedio del tiempo de inactividad de las redes empresariales es de $5,600 dólares por minuto. Reparar de emergencia es siempre más costoso que prevenir.
            </p>
            <a href="https://blogs.gartner.com/andrew-lerner/2014/07/16/the-cost-of-downtime/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-accent font-mono hover:underline flex items-center gap-1 w-max">
              Fuente: Gartner <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Caída de productividad</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Los empleados pierden en promedio 22 minutos al día lidiando con problemas relacionados con la tecnología, lo que se traduce en cientos de horas perdidas anualmente por cada miembro de su equipo.
            </p>
            <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-accent font-mono hover:underline flex items-center gap-1 w-max">
              Fuente: Harvard Business Review <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-6">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Aumento en gastos de reparación</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Afrontar los problemas técnicos cuando ya ocurrieron cuesta significativamente más caro en facturación de horas técnicas, equipo de emergencia y pérdida de prestigio por falta de disponibilidad.
            </p>
            <a href="https://www.forbes.com" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-accent font-mono hover:underline flex items-center gap-1 w-max">
              Fuente: Forbes Insights <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
