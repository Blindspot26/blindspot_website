import React from 'react';
import { Terminal } from 'lucide-react';
import { LeadSubmission } from '../../types';

interface LeadRegistryConsoleProps {
  storedLeads: LeadSubmission[];
  onClearLeads: () => void;
}

export default function LeadRegistryConsole({ storedLeads, onClearLeads }: LeadRegistryConsoleProps) {
  if (storedLeads.length === 0) return null;

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800" id="sandbox-leads-terminal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-ping"></span>
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-tight flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-primary" />
                Consola de Envío de Clientes Potenciales (Pruebas)
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Registro CRM local simulado que rastrea las solicitudes de B2B guardadas dentro de la sesión de su navegador.
            </p>
          </div>

          <button
            id="clear-leads-btn"
            onClick={onClearLeads}
            className="px-3 py-1.5 rounded bg-red-500/10 hover:bg-rose-500 hover:text-white border border-rose-500/20 text-rose-450 font-mono text-[10px] uppercase font-bold transition-all cursor-pointer"
          >
            Limpiar Registro Local
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 animate-fade-in">
          {storedLeads.map((lead) => (
            <div key={lead.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs font-mono relative overflow-hidden text-slate-300">
              <div className="absolute top-0 right-0 p-1 bg-brand-primary/25 text-brand-primary border-l border-b border-slate-800 text-[9px] font-bold uppercase">
                DESPACHADO
              </div>
              
              <div className="pb-3 border-b border-slate-800 mb-3 text-white">
                 <div className="font-bold text-sm tracking-tight font-display">{lead.companyName}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">ID: {lead.id}</div>
              </div>

              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <div>
                  <span className="text-slate-500">Autorizado:</span> <strong className="text-white">{lead.contactName}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Teléfono CR:</span> <strong className="text-white">{lead.phone}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Email:</span> <span className="text-brand-primary">{lead.email}</span>
                </div>
                <div>
                  <span className="text-slate-500">Nivel SLA:</span> <span className="text-emerald-500 font-bold uppercase">{lead.preferredTier}</span>
                </div>
                <div>
                  <span className="text-slate-500">Cobertura:</span> <span className="text-white">{lead.deviceCount} estaciones</span>
                </div>
                <div>
                  <span className="text-slate-500">Sector de Enfoque:</span> <span className="text-white">{lead.sector}</span>
                </div>
                {lead.complianceNeeded.length > 0 && (
                  <div>
                    <span className="text-slate-500">Cumplimiento Requerido:</span>{' '}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {lead.complianceNeeded.map((c, i) => (
                        <span key={i} className="text-[9px] px-1 bg-slate-900 border border-slate-850 text-brand-primary rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800 text-[10px] mt-4 leading-relaxed text-slate-500">
                {lead.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
