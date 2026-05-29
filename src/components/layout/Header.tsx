import React from 'react';
import { Terminal } from 'lucide-react';
import { LeadSubmission } from '../../types';

interface HeaderProps {
  storedLeads: LeadSubmission[];
}

export default function Header({ storedLeads }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center hover:opacity-95 transition-all">
          <img src="/logo.png" alt="Blindspot Logo" className="h-10 sm:h-11 object-contain" />
        </a>

        {/* Nav menu links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider font-display text-slate-600">
          <a href="#inicio" className="hover:text-brand-primary transition-colors">Inicio</a>
          <a href="#value-proposition" className="hover:text-brand-primary transition-colors">Pilares de valor</a>
          <a href="#pricing" className="hover:text-brand-primary transition-colors">Planes de servicio</a>
          <a href="#nosotros" className="hover:text-brand-primary transition-colors">Nosotros</a>
          <a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a>
          {storedLeads.length > 0 && (
            <a href="#sandbox-leads-terminal" className="text-brand-primary hover:text-brand-primary/80 transition-colors flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              Despachos Activos ({storedLeads.length})
            </a>
          )}
        </nav>

        {/* Header Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="#contacto" 
            className="px-4.5 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary/95 text-white font-bold text-xs font-display tracking-tight transition-all shadow cursor-pointer"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </header>
  );
}
