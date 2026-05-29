import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import DowntimeCost from './components/sections/DowntimeCost';
import ValueProposition from './components/sections/ValueProposition';
import Pricing from './components/sections/Pricing';
import AboutUs from './components/sections/AboutUs';
import LeadCapture from './components/LeadCapture';

export default function App() {
  const [activePlanSelection, setActivePlanSelection] = useState<string>('premier');
  const [deviceSelection, setDeviceSelection] = useState<number>(20);

  const selectPlanFromCalculator = (tierId: string, deviceCount: number) => {
    setActivePlanSelection(tierId);
    setDeviceSelection(deviceCount);
    const target = document.getElementById('contacto');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-slate text-slate-800 selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <DowntimeCost />
      <ValueProposition />
      <Pricing selectPlanFromCalculator={selectPlanFromCalculator} />
      <AboutUs />

      <section className="py-20 max-w-7xl mx-auto px-6" id="contacto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-[1.1] text-brand-secondary tracking-tight">
              Inicie su transición hacia una operación de TI corporativa completamente gestionada
            </h2>
          </div>

          <div className="lg:col-span-7">
            <LeadCapture 
              preSelectedTier={activePlanSelection} 
              preSelectedDeviceCount={deviceSelection}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
