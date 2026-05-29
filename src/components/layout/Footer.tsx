import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900">
        
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center">
            <img src="/logo-invert.png" alt="Blindspot Logo" className="h-11 object-contain" />
          </div>
          
          <p className="leading-relaxed text-[11px] text-slate-500">
            Servicios gestionados de Tecnologias de informacion e infraestructura
          </p>
        </div>

        <div className="md:col-span-6 space-y-4">
          <h4 className="text-white font-bold font-display uppercase tracking-widest text-xs">Información de Contacto</h4>
          <div className="space-y-2 text-[11px] text-slate-400 font-mono">
            <p>📍 San Jose, Costa Rica</p>
            <p>📞 Central: +506 7116-8253</p>
            <p>✉️ Correo Electrónico: ventas@blindspotcr.com</p>
            <p>🕙 L-V 8am-5pm</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-550 gap-4">
        <p>© {new Date().getFullYear()} Blindspot SRL. Todos los derechos reservados. San Jose, Costa Rica.</p>
        <div className="flex gap-4 font-mono text-[10px]">
          <a href="#value-proposition" className="hover:text-white transition-all">Términos de SLA</a>
          <span>•</span>
          <a href="#pricing" className="hover:text-white transition-all">Acuerdos de Soporte</a>
        </div>
      </div>
    </footer>
  );
}
