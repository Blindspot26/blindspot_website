import React from 'react';
import { Zap, DollarSign, Shield, Cpu } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="value-proposition">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-secondary">
          Por qué los centros de costo de TI reactivos desperdician capital
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          La mayoría de los proveedores de TI actúan como "escuadrones de rescate", lo que significa que solo generan ingresos cuando sus sistemas fallan. Blindspot invierte el flujo económico al vincular nuestros beneficios a su tiempo de actividad continuo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:border-brand-primary/40 hover:shadow-md transition-all group duration-300">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-md font-bold font-display text-slate-900">Proactividad sobre reactividad</h3>
          <p className="text-xs text-slate-555 leading-relaxed">
            En lugar de esperar a que las redes se caigan, nuestro agente de monitoreo silencioso (RMM 24/7) parchea automáticamente las estaciones de trabajo fuera de horas laborales, asegurando las operaciones sin interrupciones.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:border-brand-primary/40 hover:shadow-md transition-all group duration-300">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-md font-bold font-display text-slate-900">Previsibilidad financiera</h3>
          <p className="text-xs text-slate-555 leading-relaxed">
            No más tarifas de consultoría sorpresivas. El precio fijo plano por dispositivo permite a su director financiero saber exactamente, hasta el último colón, cuánto costará la salud de la red cada trimestre.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:border-brand-primary/40 hover:shadow-md transition-all group duration-300">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-md font-bold font-display text-slate-900">Estándares corporativos para todas las empresas</h3>
          <p className="text-xs text-slate-555 leading-relaxed">
            Brindamos a socios de salud, bufetes de abogados y centros de logística un marco operativo completo (HIPAA, GDPR, PCI-DSS) que previamente solo estaba al alcance de grandes corporaciones.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:border-brand-primary/40 hover:shadow-md transition-all group duration-300">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
            <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-md font-bold font-display text-slate-900">Panel de flota consolidado</h3>
          <p className="text-xs text-slate-555 leading-relaxed">
            Reemplaza hasta 15 soluciones de software fragmentadas (herramientas de parches, registros de malware, inventarios de activos, sistemas de tickets) en un único plano de control cohesivo.
          </p>
        </div>
      </div>
    </section>
  );
}
