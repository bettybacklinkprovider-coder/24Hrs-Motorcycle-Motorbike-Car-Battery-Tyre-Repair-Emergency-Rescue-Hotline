import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ShieldAlert } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#040810] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/80 border border-red-700/50 text-red-400">
                <ShieldAlert className="h-5 w-5 text-red-500" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                24Hrs Rescue Hotline
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {BUSINESS_INFO.name}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dependable, 24-hour on-site roadside rescue for cars, motorbikes, and commercial fleets across Singapore.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, 'home')}
                  className="hover:text-red-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="hover:text-red-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="hover:text-red-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="hover:text-red-400 transition-colors"
                >
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Roadside Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Car Battery Jump-Start & Replacement</li>
              <li>Motorcycle Battery Diagnostic & Swap</li>
              <li>Emergency Car Tyre Repair & Plug</li>
              <li>Motorbike Tyre Assistance & Re-inflation</li>
              <li>Islandwide Breakdown Safety Rescue</li>
              <li>On-site Alternator & Electrical Triage</li>
            </ul>
          </div>

          {/* Col 4: 24/7 Contact & Location */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              24/7 Hotline & Base
            </h4>
            
            <div className="flex items-start gap-3 text-sm">
              <Phone className="h-4 w-4 text-red-500 shrink-0 mt-1" />
              <div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="font-bold text-white hover:text-red-400 transition-colors block text-base"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <span className="text-xs text-slate-400">Available 24 Hours · Immediate Response</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MessageSquare className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
              <div>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  WhatsApp Quick Chat
                </a>
                <span className="text-xs text-slate-400 block">Fast Location & Photo Sharing</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-1" />
              <address className="not-italic text-xs text-slate-300 leading-snug">
                {BUSINESS_INFO.address}
              </address>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <Clock className="h-4 w-4 text-slate-400 shrink-0" />
              <span>{BUSINESS_INFO.operatingHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {BUSINESS_INFO.shortName}. All rights reserved. Operating in Singapore.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Jurong West Base</span>
            <span aria-hidden="true">·</span>
            <span>All Major Expressways (PIE / AYE / BKE / CTE / ECP / KPE)</span>
            <span aria-hidden="true">·</span>
            <span>Car & Motorcycle Assistance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
