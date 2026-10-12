import React from 'react';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  HeartHandshake, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';
import { APP_IMAGES } from '../assets/images';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="flex flex-col">
      
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-[#09152B] to-[#050A14]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
              <span>About Our Emergency Roadside Service</span>
              <span aria-hidden="true">·</span>
              <span>Singapore Motorist Support</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dependable Emergency Roadside Assistance Across Singapore
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We exist to ensure no driver or rider is left stranded in the dark with a flat tyre or dead battery. 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Ethos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B14] border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">
                Company Overview
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
                Dedicated Roadside Relief for Cars & Motorcycles
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">{BUSINESS_INFO.name}</strong> was established to fill a crucial gap for Singapore motorists: immediate, specialized on-site mechanical intervention that eliminates the delay and expense of unnecessary towing.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Operating directly out of Jurong West with mobile response units active across all Singapore sectors, our technicians carry automotive diagnostic instruments, factory-spec batteries, and industrial-grade puncture repair equipment. Whether you are dealing with a dead hybrid battery in an underground carpark or a punctured motorbike tyre on the expressway shoulder, we respond with urgent focus and practical solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-slate-800 bg-[#09111D] p-4">
                  <h4 className="text-sm font-bold text-white mb-1">Cars & Commercials</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Diagnostic voltage checking, DIN & JIS car battery replacement, and spare wheel torqueing.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#09111D] p-4">
                  <h4 className="text-sm font-bold text-white mb-1">Motorbikes & Scooters</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Delicate fairing disassembly, motorcycle 12V AGM batteries, and tubeless tyre puncture sealing.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl border border-slate-800 bg-[#0A1220] p-3 shadow-2xl overflow-hidden">
                <img
                  src={APP_IMAGES.hero}
                  alt="Roadside Assistance Operations in Singapore"
                  referrerPolicy="no-referrer"
                  className="rounded-xl w-full h-80 object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                    <MapPin className="h-4 w-4" />
                    <span>Based at Jurong West Street 41, Block 481</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Serving expressways (PIE, AYE, CTE, SLE, TPE, BKE, KPE, ECP) and residential estates across Singapore round-the-clock.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Approach & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060D1A] border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Our Service Approach
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Customer-Focused Principles & Roadside Safety
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Breakdowns create acute stress and road safety vulnerabilities. Our entire workflow is built around safety, transparency, and rapid resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-950/80 border border-red-800 text-red-400 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Uncompromising Roadside Safety
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Safety comes first. On arriving at expressway shoulders or busy carriageways, our priority is hazard warning, positioning reflective safety cones, and moving passengers to secure areas before mechanical work commences.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                  <span>Hazard beacon positioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-500" />
                  <span>Protective gear & safe jacking</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 mb-6">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Transparent & Honest Assessment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                We believe in genuine mechanical honesty. We will never push for a brand-new battery replacement if your issue is merely loose terminal wiring or a simple alternator belt slack. You receive clear diagnostic data before any parts are swapped.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                  <span>Direct digital voltage readings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" />
                  <span>Clear pricing before intervention</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 mb-6">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Quality Parts & Equipment
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                A roadside repair must stand the test of daily driving. We only deploy sealed maintenance-free and AGM batteries from established brands, and industrial vulcanizing plugs that withstand Singapore's intense tropical heat and asphalt friction.
              </p>
              <ul className="mt-auto space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Fresh, pre-charged automotive batteries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Industrial puncture repair materials</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Emergency Callout Box */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050A14]">
        <div className="mx-auto max-w-5xl rounded-3xl border border-red-900/60 bg-gradient-to-r from-[#170508] to-[#0A1424] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Roadside Rescue Right Now?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Don't remain stranded in Singapore traffic. Our operators are available 24/7 to coordinate immediate assistance to your location.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-950/70 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors"
            >
              View Contact Details
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
