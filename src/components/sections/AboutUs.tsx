import React from 'react';
import { Target, Eye, Check } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="nosotros">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-brand-secondary tracking-tight">
              Quiénes Somos: Dirección Tecnológica de Clase Mundial
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Blindspot nace bajo la dirección de un consultor y especialista en ciberseguridad con más de una década de trayectoria en empresas multinacionales, liderando verticales críticas como FinTech, Salud, Servicios y Tecnología.
            </p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Nuestra experiencia abarca desde el diseño, implementación y control de calidad de infraestructura de TI, hasta la gestión de proyectos de alta envergadura, relaciones corporativas, liderazgo ejecutivo, mitigación de riesgos y cumplimiento regulatorio internacional. No somos un proveedor externo; somos el brazo tecnológico que protege y potencia su organización.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-primary" /> Misión
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Impulsar la continuidad operativa de nuestros clientes mediante el diseño e implementación de infraestructura de telecomunicaciones de alta ingeniería y servicios gestionados de IT. Nos comprometemos a transformar la complejidad tecnológica en estabilidad, garantizando redes físicos y lógicas que superen los estándares internacionales de rendimiento y seguridad.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-primary" /> Visión
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Convertirnos en el aliado estratégico líder en Costa Rica para la gestión integral de infraestructura tecnológica, siendo reconocidos por nuestra excelencia técnica, innovación en servicios proactivos y la capacidad de blindar el crecimiento digital de las empresas hacia el futuro.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold font-display text-slate-900">A Quién Ayudamos: Socios en el Crecimiento Empresarial</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Impulsamos a empresas y organizaciones de todos los sectores que reconocen la tecnología no como un gasto, sino como una palanca estratégica para escalar operaciones, optimizar procesos y aumentar utilidades.
            </p>
            <ul className="space-y-3 mt-4 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Un socio estratégico de confianza que identifique brechas tecnológicas y las resuelva de manera constante y efectiva.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Consultoría experta y acompañamiento ejecutivo continuo para tomar decisiones de inversión inteligentes en TI.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Mitigar riesgos legales y operativos mediante un control estricto de la seguridad de sus datos.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 lg:mt-0 mt-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-brand-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
            <h3 className="text-2xl font-bold font-display mb-4 relative z-10">¿Qué nos diferencia?</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 relative z-10">
              Entregamos soluciones llave en mano con cumplimiento normativo estricto y desempeño certificado, combinando mano de obra especializada con una visión estratégica proactiva (cero modelo reactivo) para blindar la continuidad de su negocio.
            </p>
            <ul className="space-y-4 text-xs text-slate-300 relative z-10">
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
                <span className="leading-relaxed"><strong>Despliegue Certificado:</strong> Diseño de infraestructura física garantizada bajo normas ANSI/TIA-568 y etiquetado estructurado.</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
                <span className="leading-relaxed"><strong>Operación Proactiva:</strong> Monitoreo IA con respuesta inmediata, reemplazando el viejo modelo de soporte break-fix.</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-1.5"></div>
                <span className="leading-relaxed"><strong>Alineación Estratégica:</strong> Consultoría experta vCIO para asegurar retorno de inversión tecnológica y rentabilidad.</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 border border-slate-200 rounded-2xl">
            <h3 className="text-2xl font-bold font-display text-brand-secondary mb-5">Valores Centrales</h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold font-display text-slate-900 border-l-2 border-brand-primary pl-3">Integridad de Capa Física</h4>
                <p className="text-xs text-slate-600 mt-2 pl-3.5 leading-relaxed">Creemos que una red confiable nace de un cableado perfecto. No tomamos atajos en el despliegue de su infraestructura crítica.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold font-display text-slate-900 border-l-2 border-brand-primary pl-3">Proactividad</h4>
                <p className="text-xs text-slate-600 mt-2 pl-3.5 leading-relaxed">Resolvemos los problemas de red, hardware y seguridad antes de que el cliente o sus sistemas noten que existen.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold font-display text-slate-900 border-l-2 border-brand-primary pl-3">Transparencia Técnica</h4>
                <p className="text-xs text-slate-600 mt-2 pl-3.5 leading-relaxed">Hablamos con la verdad de los datos, apoyados y respaldados por certificaciones, análisis constantes y métricas de desempeño reales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
