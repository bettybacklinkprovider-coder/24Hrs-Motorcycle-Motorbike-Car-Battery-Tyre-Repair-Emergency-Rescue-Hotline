import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  Battery, 
  Car, 
  Bike, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  AlertTriangle,
  Zap,
  Check
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/servicesData';
import { APP_IMAGES } from '../assets/images';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquiry: (defaultService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  // Contact & Location Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Car',
    location: '',
    serviceRequired: 'Car Battery Replacement',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Singapore number';
    }
    if (!formData.location.trim()) errs.location = 'Please state your location in Singapore';

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  // 5 services cards for Section 2
  const homepageServices = [
    {
      title: 'Car Battery Replacement',
      desc: 'Mobile diagnostic voltage testing, on-site jump start, and replacement with fresh heavy-duty automotive batteries.',
      icon: Battery,
      serviceKey: 'Car Battery Jump-Start & Replacement',
      image: APP_IMAGES.serviceBattery
    },
    {
      title: 'Motorcycle Battery Replacement',
      desc: 'Specialized 12V motorcycle battery diagnostics and on-the-spot installation for bikes, scooters, and cruisers.',
      icon: Bike,
      serviceKey: 'Motorcycle & Motorbike Battery Services',
      image: APP_IMAGES.serviceBattery
    },
    {
      title: 'Tyre Repair',
      desc: 'On-the-spot tubeless puncture plugging, valve inspection, and rapid re-inflation across all Singapore roadways.',
      icon: Wrench,
      serviceKey: 'Car Tyre Repair & Replacement',
      image: APP_IMAGES.serviceTyre
    },
    {
      title: 'Tyre Replacement',
      desc: 'Spare wheel mounting or new tyre replacement when your wheel suffers catastrophic puncture or sidewall rupture.',
      icon: Car,
      serviceKey: 'Car Tyre Repair & Replacement',
      image: APP_IMAGES.serviceTyre
    },
    {
      title: 'Emergency Vehicle Rescue',
      desc: 'Comprehensive 24/7 rescue assistance for stalled engines, electrical cutouts, and expressway breakdowns.',
      icon: Zap,
      serviceKey: 'Emergency Roadside Rescue',
      image: APP_IMAGES.hero
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* =========================================================
          SECTION 1: HERO SECTION
          A premium dark red and deep blue background featuring a roadside 
          rescue vehicle, car, motorcycle, and emergency assistance imagery. 
          Bold headline: “24/7 Emergency Roadside Assistance in Singapore.” 
          Two CTA buttons: “Call Now” and “Get Emergency Help.”
      ========================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#09152B] via-[#050B14] to-[#0A0710]">
        
        {/* Background Image with Deep Red & Blue Luxury Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={APP_IMAGES.hero}
            alt="Emergency Roadside Rescue Vehicle, Car and Motorcycle in Singapore"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center opacity-40 brightness-90 filter"
          />
          {/* Gradients to create the luxury dark crimson & deep navy theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A]/95 via-[#060D1A]/80 to-[#1F070B]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-[#071A36]/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
              <span>Jurong West Base</span>
              <span aria-hidden="true">·</span>
              <span>Islandwide Singapore Coverage</span>
              <span aria-hidden="true">·</span>
              <span>Available 24/7</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
              24/7 Emergency Roadside Assistance in Singapore
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Stranded with a dead battery, flat tyre, or sudden engine stoppage? Our mobile rescue technicians provide immediate roadside support for cars and motorbikes anywhere in Singapore.
            </p>

            {/* Key Service Highlights in Hero */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-1 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-red-500" />
                <span>Car & Motorcycle Batteries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-red-500" />
                <span>Roadside Tyre Repair & Plugging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-red-500" />
                <span>24 Hours Hotline Dispatch</span>
              </div>
            </div>

            {/* Two CTA Buttons: “Call Now” and “Get Emergency Help” */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-red-700 hover:bg-red-600 active:bg-red-800 px-8 py-4 text-base font-bold text-white transition-all shadow-xl shadow-red-950/70 border border-red-500/40"
              >
                <Phone className="h-5 w-5 animate-pulse text-white" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenEnquiry('Emergency Roadside Rescue')}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800/90 px-7 py-4 text-base font-semibold text-slate-100 transition-colors"
              >
                <span>Get Emergency Help</span>
                <ArrowRight className="h-4 w-4 text-red-400" />
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              Direct line to dispatch · No automated call queues · Islandwide recovery units
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 2: OUR SERVICES
          Display attractive service cards for car battery replacement, 
          motorcycle battery replacement, tyre repair, tyre replacement, 
          and emergency vehicle rescue.
      ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#060C17]">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                Specialized Roadside Assistance
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Our Core Emergency Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-semibold text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              <span>Explore All Detailed Capabilities</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-2xl border border-slate-800/90 bg-[#0A1220] overflow-hidden hover:border-red-900/60 transition-all duration-300 shadow-lg"
                >
                  <div className="h-48 w-full overflow-hidden bg-slate-950 relative">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-950/90 border border-red-700/60 text-red-400 shadow-md">
                      <IconComp className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => onOpenEnquiry(srv.serviceKey)}
                        className="text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                      >
                        Request Service
                      </button>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneTel}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call Hotline</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3: WHY CHOOSE US
          Highlight 24-hour availability, fast response, professional 
          assistance, reliable service, and customer convenience.
      ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#050A14]">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Built For Singapore Motorists
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Why Motorists Rely On Our Rescue Team
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              When an unexpected breakdown happens, you need dependable technicians who arrive prepared with the right diagnostic gear and replacement parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            
            {/* Card 1: 24-Hour Availability */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#09111D] overflow-hidden flex flex-col hover:border-red-800/60 transition-all duration-300 shadow-xl">
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.why24hr}
                  alt="24-Hour Standby Roadside Rescue in Singapore"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/80 border border-red-700/60 text-red-400 backdrop-blur-md shadow-md">
                  <Clock className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  24-Hour Availability
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Operating non-stop day and night, including midnight rainstorms, weekends, and public holidays across Singapore.
                </p>
              </div>
            </div>

            {/* Card 2: Fast Response */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#09111D] overflow-hidden flex flex-col hover:border-red-800/60 transition-all duration-300 shadow-xl">
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.whyFastResponse}
                  alt="Rapid Roadside Response on Singapore Expressway"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-700/60 text-blue-400 backdrop-blur-md shadow-md">
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Fast Response
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rapid coordination from our Jurong West operations center to reach stranded drivers and riders as swiftly as traffic permits.
                </p>
              </div>
            </div>

            {/* Card 3: Professional Assistance */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#09111D] overflow-hidden flex flex-col hover:border-red-800/60 transition-all duration-300 shadow-xl">
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.whyProfessional}
                  alt="Professional Automotive Technician Diagnostics"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 backdrop-blur-md shadow-md">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Professional Assistance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Skilled automotive technicians trained in electronic battery testers, safe wheel torqueing, and motorbike fairing care.
                </p>
              </div>
            </div>

            {/* Card 4: Reliable Service */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#09111D] overflow-hidden flex flex-col hover:border-red-800/60 transition-all duration-300 shadow-xl">
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.whyReliable}
                  alt="Reliable High Grade Battery and Tyre Repair Equipment"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/80 border border-red-700/60 text-red-400 backdrop-blur-md shadow-md">
                  <Wrench className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Reliable Service
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Genuine high-performance batteries, commercial grade plugs, and transparent pricing before work begins.
                </p>
              </div>
            </div>

            {/* Card 5: Customer Convenience */}
            <div className="group rounded-2xl border border-slate-800/90 bg-[#09111D] overflow-hidden flex flex-col hover:border-red-800/60 transition-all duration-300 shadow-xl">
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={APP_IMAGES.whyConvenience}
                  alt="Customer Convenience Roadside Rescue in Singapore"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-700/60 text-blue-400 backdrop-blur-md shadow-md">
                  <Car className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  Customer Convenience
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No towing hassles needed for flat tyres or depleted batteries; we resolve the issue right where your car or bike is parked.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4: HOW IT WORKS
          Show a simple 3-step process: 
          1. Call Our Hotline 
          2. Share Your Location 
          3. Get Roadside Assistance
      ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-[#060C18]">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Simple 3-Step Process
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              How Our Emergency Assistance Works
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              When stranded, every minute matters. Here is how we get you back moving safely in three straightforward steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-red-500 font-mono">01</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/80 border border-red-800/60 text-red-400">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Call Our Hotline
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Dial <strong className="text-white font-semibold">{BUSINESS_INFO.phone}</strong> anytime day or night. Speak directly with our dispatch controller who will understand your vehicle symptom.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                Direct phone connection · No automated routing
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-red-500 font-mono">02</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Share Your Location
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Provide your expressway marker, carpark deck, or street name. You can also share your live GPS pin and vehicle photos instantly via our WhatsApp line.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                WhatsApp live pin sharing enabled
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#0A1220] p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black text-red-500 font-mono">03</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                  <Wrench className="h-5 w-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                Get Roadside Assistance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Our mobile technician arrives on site with automotive tools, tests the battery or repairs the tyre, and gets you safely mobile without delays.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                On-site testing & immediate resolution
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-950/50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Need Help Now? Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5: EMERGENCY RESCUE BANNER
          Striking red and blue banner with the message:
          “Vehicle Trouble? We're Ready to Help 24/7”
          and a prominent click-to-call button.
      ========================================================= */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-red-900/60 bg-gradient-to-r from-[#170508] via-[#09152B] to-[#1F070B]">
        
        {/* Glow effects */}
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-red-700/20 blur-3xl pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-700/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
              <AlertTriangle className="h-4 w-4" />
              <span>Immediate Roadside Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Vehicle Trouble? We're Ready to Help 24/7
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Don't leave your car or motorbike stranded on the side of the road. Contact Singapore's dedicated 24-hour battery and tyre repair specialists right now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center gap-3 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 px-8 py-4 text-base font-bold text-white transition-all shadow-xl shadow-red-950/80 border border-red-400/40"
            >
              <Phone className="h-5 w-5 animate-pulse text-white" />
              <span>Call Hotline: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-emerald-600/60 bg-emerald-950/70 hover:bg-emerald-900/80 px-6 py-4 text-sm font-semibold text-emerald-300 transition-colors"
            >
              <span>WhatsApp Message</span>
            </a>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 6: CONTACT & LOCATION
          Display the business phone number, full address, service 
          enquiry form, and an embedded map pointing to the provided address.
      ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#050A14]" id="contact-section">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Jurong West Operations Center
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Contact & Location
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Stationed in Jurong West with dispatch coverage reaching all Singapore expressways, estates, and car parks 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contact Info & Service Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Business Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="rounded-xl border border-slate-800 bg-[#0A1220] p-4 flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/80 border border-red-800/60 text-red-400 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Emergency Hotline</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneTel}`}
                      className="text-base font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-[11px] text-slate-400">Click to call immediately</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#0A1220] p-4 flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400 shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Our Base Address</div>
                    <p className="text-xs font-semibold text-white mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-400">Islandwide dispatch units</span>
                  </div>
                </div>

              </div>

              {/* Service Enquiry Form */}
              <div className="rounded-2xl border border-slate-800/90 bg-[#09111D] p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-2">
                  Service Enquiry & Roadside Request
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Send your enquiry for on-site car or motorbike battery testing, replacement, or tyre assistance.
                </p>

                {formSubmitted ? (
                  <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/30 p-6 text-center space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900/60 text-emerald-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Enquiry Submitted Successfully</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you. We have received your roadside request for <strong>{formData.location}</strong>. If your breakdown is urgent, please call our 24/7 hotline directly.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneTel}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-xs font-bold text-white hover:bg-red-600 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call {BUSINESS_INFO.phone}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jeremy Lim"
                          className={`w-full rounded-lg border bg-[#050A14] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                            formErrors.name ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +65 9181 0419"
                          className={`w-full rounded-lg border bg-[#050A14] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                            formErrors.phone ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Vehicle Type
                        </label>
                        <select
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Car">Car (Sedan, Hatchback, SUV, Continental)</option>
                          <option value="Motorcycle">Motorcycle / Motorbike (Class 2 / 2A / 2B)</option>
                          <option value="Van / Commercial">Van / Commercial Vehicle</option>
                          <option value="Other">Other Vehicle</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Service Required
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Car Battery Replacement">Car Battery Replacement / Jump-Start</option>
                          <option value="Motorcycle Battery Replacement">Motorcycle Battery Replacement</option>
                          <option value="Tyre Repair">Tyre Repair / Puncture Plug</option>
                          <option value="Tyre Replacement">Tyre Replacement</option>
                          <option value="Emergency Vehicle Rescue">Emergency Vehicle Rescue / Breakdown</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Breakdown Location in Singapore *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Block 481 Jurong West St 41, or PIE towards Changi near Exit 36"
                        className={`w-full rounded-lg border bg-[#050A14] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                          formErrors.location ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                        }`}
                      />
                      {formErrors.location && (
                        <p className="text-[11px] text-red-400 mt-1">{formErrors.location}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Car battery clicked; vehicle stalled in basement carpark..."
                        className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3.5 text-xs font-bold text-white transition-colors shadow-lg shadow-red-950/60"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Roadside Service Enquiry</span>
                    </button>

                  </form>
                )}

              </div>

            </div>

            {/* Right: Embedded Google Map pointing to Jurong West St 41, Block 481 (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="rounded-2xl border border-slate-800/90 bg-[#0A1220] p-4 sm:p-5 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Base Location Map
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Singapore 640481</span>
                </div>

                <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-slate-800">
                  <iframe
                    title="Jurong West Street 41 Block 481 Location Map"
                    src="https://maps.google.com/maps?q=Jurong+West+Street+41,+Block+481,+Singapore+640481&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.05)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-3.5 space-y-2 text-xs text-slate-300">
                  <p className="font-semibold text-white">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Strategically located near major western transit arteries (PIE & AYE) with swift mobilization units serving western, central, northern, and eastern Singapore corridors 24 hours a day.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
