import React from 'react';
import { Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export const EmergencyStickyBar: React.FC = () => {
  return (
    <aside 
      aria-label="Emergency quick contact" 
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-red-900/50 bg-[#071324]/95 backdrop-blur-md px-3 py-2 sm:py-2.5 shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        
        {/* Left message on tablet/desktop */}
        <div className="hidden sm:flex items-center gap-2.5 text-xs text-slate-300">
          <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
          <span className="font-medium text-slate-200">
            Roadside emergency right now in Singapore?
          </span>
          <span className="text-slate-400">Technicians ready 24/7 across the island.</span>
        </div>

        {/* Buttons */}
        <div className="flex w-full sm:w-auto items-center justify-end gap-2.5">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-lg border border-emerald-600/40 bg-emerald-950/70 hover:bg-emerald-900/80 px-3 py-2 text-xs font-semibold text-emerald-300 transition-colors"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp Location</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-lg bg-red-700 hover:bg-red-600 active:bg-red-800 px-4 py-2 text-xs font-bold text-white shadow-md shadow-red-950/80 transition-colors border border-red-500/40"
          >
            <Phone className="h-3.5 w-3.5 animate-pulse text-white" />
            <span>Call 24/7 Hotline: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

      </div>
    </aside>
  );
};
