import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  selectPlanFromCalculator: (tierId: string, deviceCount: number) => void;
}

export default function Pricing({ selectPlanFromCalculator }: PricingProps) {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="pricing">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-brand-secondary">
          Precios de TI predecibles que crecen con su operación
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          Elija la alineación operativa que exige su flujo de trabajo. Cada nivel está vinculado a garantías de SLA concretas, respaldadas por nuestra base local de ingenieros.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
        
        {/* CORE TIER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all relative">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">SALUD INFRAESTRUCTURAL BÁSICA</span>
              <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">Plan CORE</h3>
              <p className="text-xs text-slate-555 mt-2">Perfecto para oficinas administrativas estándar que requieren monitoreo centralizado y seguridad esencial de parches.</p>
            </div>

            <div className="flex items-baseline gap-1.5 py-4 border-y border-slate-100">
              <span className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">$40</span>
              <span className="text-xs text-slate-500 font-mono">/ dispositivo / mes</span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">Inclusiones del Plan:</div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Monitoreo y Gestión Remota Silenciosa las 24 horas (RMM)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Entrega Automatizada de Parches (Fuera de Horas Laborales)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Sistema de Soporte y Portal del Usuario</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>1.5 Horas de cobertura helpdesk / dispositivo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 mt-10 space-y-4">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-[11px] space-y-1">
              <div className="font-mono text-slate-500">Tiempo de Respuesta Garantizado:</div>
              <div className="font-bold text-slate-900">P1: <span className="text-slate-900">Respuesta en 8 Horas</span></div>
            </div>
            
            <a
              href="#contacto"
              id="select-core-plan-btn"
              onClick={(e) => { e.preventDefault(); selectPlanFromCalculator('core', 15); }}
              className="block w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold font-display text-xs tracking-tight transition-all text-center cursor-pointer"
            >
              Contratar Nivel CORE
            </a>
          </div>
        </div>

        {/* PREMIER TIER (POPULAR) */}
        <div className="bg-white border-2 border-brand-primary rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-lg transition-all relative">
          <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest font-mono bg-brand-accent text-brand-secondary uppercase shadow-sm">
            RECOMENDADO
          </span>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">CONTROL TOTAL DE OPERACIONES</span>
              <h3 className="text-2xl font-bold font-display text-brand-primary mt-1">Plan PREMIER</h3>
              <p className="text-xs text-slate-600 mt-2">Diseñado para bufetes de abogados, centros comerciales y oficinas profesionales que exigen seguridad blindada, supervisión de red y garantías en el sitio.</p>
            </div>

            <div className="flex items-baseline gap-1.5 py-4 border-y border-slate-100">
              <span className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">$70</span>
              <span className="text-xs text-brand-primary font-mono">/ dispositivo / mes</span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-950 font-display uppercase tracking-wider">Inclusiones de CORE y además:</div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Catalogación de Activos de Estaciones de Trabajo (ITAM)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Respaldo en la Nube Encriptado Diario y Plan BCDR</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Protección de Circuitos Supervisados por Red</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Soporte Remoto Ilimitado + 8 Horas/mes en el Sitio</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 mt-10 space-y-4">
            <div className="bg-brand-primary/5 p-3.5 rounded-xl border border-brand-primary/20 text-[11px] space-y-1">
              <div className="font-mono text-brand-primary">Tiempo de Respuesta Garantizado:</div>
              <div className="font-bold text-slate-900">P1: <span className="text-emerald-600">Respuesta en 4 Horas</span></div>
            </div>

            <a
              href="#contacto"
              id="select-premier-plan-btn"
              onClick={(e) => { e.preventDefault(); selectPlanFromCalculator('premier', 25); }}
              className="block w-full py-3 rounded-xl bg-brand-primary text-white font-extrabold font-display text-xs tracking-tight hover:bg-brand-primary/95 transition-all text-center shadow-md cursor-pointer"
            >
              Contratar Nivel PREMIER
            </a>
          </div>
        </div>

        {/* PLATINUM TIER */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all relative">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">REGULATORIO DE ALTA SEGURIDAD</span>
              <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">Plan PLATINUM</h3>
              <p className="text-xs text-slate-555 mt-2">Diseñado para contratistas médicos HIPAA, subcontratación tecnológica y centros financieros auditados que necesitan supervisión SecOps continua.</p>
            </div>

            <div className="flex items-baseline gap-1.5 py-4 border-y border-slate-100">
              <span className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">$150</span>
              <span className="text-xs text-slate-500 font-mono">/ dispositivo / mes</span>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">Inclusiones de PREMIER y además:</div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gestión de Accesos e Identidades (IAM)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Seguridad Avanzada en Terminales EDR con Centinela IA</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Auditorías periódicas de cumplimiento (Alineación HIPAA/GDPR)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Filtrado DNS y Plan Estratégico trimestral de vCIO</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 mt-10 space-y-4">
            <div className="bg-brand-accent p-3.5 rounded-xl border border-brand-accent/50 text-[11px] space-y-1 shadow-sm">
              <div className="font-mono text-brand-secondary/80">Tiempo de Respuesta Garantizado:</div>
              <div className="font-bold text-brand-secondary">P1: <span className="text-brand-secondary font-black">Respuesta en 1 Hora</span></div>
            </div>

            <a
              href="#contacto"
              id="select-platinum-plan-btn"
              onClick={(e) => { e.preventDefault(); selectPlanFromCalculator('platinum', 40); }}
              className="block w-full py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold font-display text-xs tracking-tight transition-all text-center cursor-pointer"
            >
              Contratar Nivel PLATINUM
            </a>
          </div>
        </div>

      </div>

      {/* Priority SLA Matrix Grid panel */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h4 className="text-sm font-bold font-display text-slate-800 mb-4 uppercase tracking-wider">
          Tabla comparativa de la matriz de respuesta de SLA
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 pb-2 text-slate-800 font-bold">
                <th className="py-2">Prioridad del Incidente</th>
                <th>Respuesta CORE</th>
                <th>Respuesta PREMIER</th>
                <th>Respuesta PLATINUM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 font-bold text-red-600">P1 - Crítico (Servidor Caído)</td>
                <td>8 Horas</td>
                <td className="text-emerald-600 font-bold">4 Horas</td>
                <td className="text-brand-primary font-bold">1 Hora</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 font-bold text-amber-600">P2 - Disrupción Mayor (Dpto. Bloqueado)</td>
                <td>12 Horas</td>
                <td className="text-emerald-600 font-bold">8 Horas</td>
                <td className="text-brand-primary font-bold">4 Horas</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 font-semibold text-sky-600">P3 - Moderado (Usuario Único Bloqueado)</td>
                <td>48 Horas</td>
                <td className="text-emerald-600 font-semibold">Siguiente Día Hábil</td>
                <td className="text-brand-primary font-semibold">8 Horas</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 font-medium text-slate-500">P4 - Mínimo (Configuración Estándar)</td>
                <td>3 Días Hábiles</td>
                <td>2 Días Hábiles</td>
                <td className="text-slate-800 font-medium">Siguiente Día Hábil</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
