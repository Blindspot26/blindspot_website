/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface LeadCaptureProps {
  preSelectedTier?: string;
  preSelectedDeviceCount?: number;
  onSuccess?: (newLead: LeadSubmission) => void;
}

export default function LeadCapture({ preSelectedTier, preSelectedDeviceCount, onSuccess }: LeadCaptureProps) {
  const [step, setStep] = useState<number>(1);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [ticketDetails, setTicketDetails] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!companyName.trim() || !contactName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Por favor complete todos los campos de contacto corporativo.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMsg('Por favor ingrese un correo electrónico válido.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: contactName,
          email: email,
          phone: phone,
          company: companyName,
          subject: "Nuevo Lead: Solicitud de Contacto - Blindspot",
          message: `La empresa ${companyName} ha solicitado contacto.\nContacto: ${contactName}\nCorreo: ${email}\nTeléfono: ${phone}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const submissionId = `BS-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
        const newLead: LeadSubmission = {
          id: submissionId,
          companyName,
          contactName,
          email,
          phone,
          deviceCount: preSelectedDeviceCount || 20,
          employeeCount: Math.round((preSelectedDeviceCount || 20) * 1.2),
          sector: 'General Corporate',
          complianceNeeded: [],
          preferredTier: preSelectedTier || 'PREMIER',
          message: 'Solicitud de contacto directo vía Web3Forms.',
          status: 'dispatched',
          timestamp: new Date().toISOString()
        };

        // Store in LocalStorage for persistence demonstration
        const currentLeads = JSON.parse(localStorage.getItem('blindspot_leads') || '[]');
        localStorage.setItem('blindspot_leads', JSON.stringify([newLead, ...currentLeads]));

        // Generate simulated engineer assignment
        const engineers = [
          { name: "Ing. Carlos G. Brenes", role: "Arquitecto Senior de Seguridad", phone: "+506 4001-9871" },
          { name: "Inga. María Paula Quirós", role: "Directora de Despliegue de RMM", phone: "+506 4001-9872" },
          { name: "Ing. Esteban Chaves", role: "Director Técnico de Consultoría vCIO", phone: "+506 4001-9873" }
        ];
        const assignedEngineer = engineers[Math.floor(Math.random() * engineers.length)];

        setTicketDetails({
          ticketId: submissionId,
          engineer: assignedEngineer
        });

        if (onSuccess) {
          onSuccess(newLead);
        }
        setStep(2);
      } else {
        setErrorMsg('Hubo un error al enviar el formulario. Por favor, intente de nuevo.');
      }
    } catch (error) {
      setErrorMsg('Error de red al intentar enviar. Intente más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setErrorMsg('');
    setStep(1);
    setTicketDetails(null);
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-md relative overflow-hidden" id="lead-capture-onboarding-card">
      <form onSubmit={handleSubmit} className="p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900">Formulario de Contacto</h3>
                <p className="text-xs text-slate-555 mt-1">
                  Ingrese sus datos para que uno de nuestros ingenieros se ponga en contacto con usted.
                </p>
              </div>

              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-600 p-3 rounded-lg text-xs font-semibold">
                  ⚠️ {errorMsg}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-display flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-brand-primary" />
                    Nombre de la Empresa o Razón Social
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Corporación Médica del Este"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-display flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-brand-primary" />
                    Nombre del Contacto
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Roberto Quirós"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-display flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-primary" />
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ej. rquiros@compania.cr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 font-display flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +506 22XX-XXXX o +506 8XXX-XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  id="btn-step1-next"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 transition-all flex items-center gap-1.5 shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Información'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && ticketDetails && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-400 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 pointer-events-none" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-display text-slate-900">¡Información Recibida!</h3>
                <p className="text-sm text-slate-500">
                  Su solicitud ha sido registrada exitosamente.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 text-left rounded-xl p-5 max-w-xl mx-auto space-y-3.5 text-xs font-mono text-slate-300 shadow-xl">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-500">TICKET_ID:</span>
                  <span className="text-white font-bold">{ticketDetails.ticketId}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-500 col-span-1">REP_ASIGNADO:</span>
                  <div className="text-emerald-400 font-semibold col-span-2">
                    {ticketDetails.engineer.name}
                    <div className="text-[10px] text-slate-400 font-sans mt-0.5">{ticketDetails.engineer.role}</div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">ESTADO:</span>
                  <span className="text-cyan-450 font-semibold">En proceso de asignación</span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[10px] leading-relaxed text-slate-400 space-y-1">
                  ⚠️ <strong className="text-slate-200">Protocolo de Contacto:</strong> Nuestro especialista asignado se pondrá en contacto pronto con <strong className="text-slate-200">{contactName}</strong> en el teléfono <strong className="text-slate-200">{phone}</strong>.
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  id="reset-form-btn"
                  onClick={resetForm}
                  className="px-5 py-2 rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  Registrar Otra Solicitud
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
