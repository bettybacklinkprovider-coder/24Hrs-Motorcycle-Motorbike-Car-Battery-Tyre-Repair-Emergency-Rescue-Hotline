import React, { useState } from 'react';
import { 
  Phone, 
  Battery, 
  Wrench, 
  Car, 
  Bike, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  AlertCircle
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquiry: (defaultService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'battery' | 'tyre' | 'rescue'>('all');

  const filteredServices = SERVICES_LIST.filter(item => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="flex flex-col">
      
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-[#09152B] to-[#050A14]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
              <span>Comprehensive Roadside Coverage</span>
              <span aria-hidden="true">·</span>
              <span>Motorcycles & Passenger Cars</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our 24-Hour Emergency Roadside Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Equipped with precision testing instruments, heavy-duty jump-starters, certified replacement batteries, and rapid roadside puncture plugging tools.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition-colors shadow-lg shadow-red-950/60"
              >
                <Phone className="h-4 w-4" />
                <span>Call Hotline: {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                <span>Request Service Enquiry</span>
                <ArrowRight className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Segmented Control & Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050B14]">
        <div className="mx-auto max-w-7xl space-y-12">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === 'all'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Services (6)
              </button>
              <button
                onClick={() => setSelectedFilter('battery')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === 'battery'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Battery Services
              </button>
              <button
                onClick={() => setSelectedFilter('tyre')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === 'tyre'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tyre Services
              </button>
              <button
                onClick={() => setSelectedFilter('rescue')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === 'rescue'
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Roadside Rescue
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Arrival depends on real-time traffic & weather conditions. Call hotline for immediate coordination.
            </p>
          </div>

          {/* 6 Dedicated Service Sections */}
          <div className="space-y-16">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl border border-slate-800/90 bg-[#09111D] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch"
                >
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={service.imagePath}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#09111D] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                        <span>Emergency Assistance</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.category.toUpperCase()}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      {/* Capabilities Bullet Checklist */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Service Inclusions & Workflow:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                              <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applicable Vehicles */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Supported Vehicle Categories:
                        </h4>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                          {service.vehicleTypes.map((vType, vIdx) => (
                            <span key={vIdx} className="border border-slate-700/80 bg-slate-900/60 rounded px-2.5 py-1">
                              {vType}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${BUSINESS_INFO.phoneTel}`}
                          className="flex items-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors shadow-md shadow-red-950/60"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Call Hotline ({BUSINESS_INFO.phone})</span>
                        </a>

                        <button
                          onClick={() => onOpenEnquiry(service.title)}
                          className="rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
                        >
                          Enquire Service
                        </button>
                      </div>

                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Send WhatsApp Location &rarr;
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trust & Operational Safety Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060D1A]">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-[#0A1220] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950 border border-blue-800 text-blue-400 shrink-0">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">
                Roadside Safety Advisory & Real-Time Dispatch Notice
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If your car or motorbike is stopped on an active expressway shoulder or lane, turn on hazard lights immediately and stand behind safety barriers if possible. We do not provide estimated generic arrival minutes online as dispatch schedules vary based on traffic flow and weather across Singapore; our team confirms exact deployment status over the phone upon receiving your call.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
