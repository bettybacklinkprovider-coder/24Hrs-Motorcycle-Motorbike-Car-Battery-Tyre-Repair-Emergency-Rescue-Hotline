import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertTriangle,
  ShieldAlert,
  Car,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { EnquiryFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    vehicleType: 'Car (Sedan / SUV / Hatchback)',
    location: '',
    serviceRequired: 'Car Battery Jump-Start & Replacement',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Singapore contact number';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please state your location in Singapore (e.g. Carpark, Road, Expressway)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col">
      
      {/* Header Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-[#09152B] to-[#050A14]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
              <span>24/7 Roadside Communications</span>
              <span aria-hidden="true">·</span>
              <span>Singapore Hotline</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact 24Hrs Roadside Emergency Hotline
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Immediate connection for car battery jump-starts, motorcycle battery replacements, roadside tyre repairs, and vehicle breakdown rescue.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Immediate Action Strip */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#170508] via-[#081220] to-[#1F070B] border-b border-red-900/40">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950 border border-red-800 text-red-500 shrink-0">
              <ShieldAlert className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Urgent Breakdown or Stalled in an Unsafe Traffic Spot?
              </p>
              <p className="text-xs text-slate-300">
                Calling our direct phone hotline is always the fastest response method.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors shadow-lg shadow-red-950/70 border border-red-500/40"
            >
              <Phone className="h-4 w-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-emerald-600/60 bg-emerald-950/80 hover:bg-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-300 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B14]">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form & Direct Contact Details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="rounded-2xl border border-slate-800 bg-[#09111D] p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-red-400">
                    <Phone className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Hotline
                    </span>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-lg font-bold text-white hover:text-red-400 transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-300">
                    24 Hours / 7 Days a week standby.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-[#09111D] p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Line
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                  >
                    +65 9181 0419
                  </a>
                  <p className="text-xs text-slate-300">
                    Fast live GPS pin & breakdown photo share.
                  </p>
                </div>

              </div>

              {/* Working Contact Form */}
              <div className="rounded-3xl border border-slate-800/90 bg-[#0A1220] p-6 sm:p-8 shadow-2xl">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Roadside Service Enquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Please provide your vehicle details and location. We review enquiries continuously.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/40 p-8 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-900/80 text-emerald-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Roadside Enquiry Dispatched
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                      We have logged your request for <strong>{formData.vehicleType}</strong> at <strong>{formData.location}</strong>. If your vehicle is in an unsafe location, please call our hotline right away.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`tel:${BUSINESS_INFO.phoneTel}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call Dispatch ({BUSINESS_INFO.phone})</span>
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            vehicleType: 'Car (Sedan / SUV / Hatchback)',
                            location: '',
                            serviceRequired: 'Car Battery Jump-Start & Replacement',
                            notes: '',
                          });
                        }}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. David Chen"
                          className={`w-full rounded-xl border bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none ${
                            errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                          }`}
                        />
                        {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9181 0419"
                          className={`w-full rounded-xl border bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none ${
                            errors.phone ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Vehicle Type *
                        </label>
                        <select
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                          className="w-full rounded-xl border border-slate-700 bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Car (Sedan / SUV / Hatchback)">Car (Sedan / SUV / Hatchback)</option>
                          <option value="Motorcycle (Class 2 / 2A / 2B)">Motorcycle (Class 2 / 2A / 2B)</option>
                          <option value="Commercial Van / Goods Vehicle">Commercial Van / Goods Vehicle</option>
                          <option value="Luxury / Continental Car">Luxury / Continental Car</option>
                          <option value="Electric Vehicle (EV)">Electric Vehicle (EV)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          Service Required *
                        </label>
                        <select
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full rounded-xl border border-slate-700 bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Car Battery Jump-Start & Replacement">Car Battery Jump-Start & Replacement</option>
                          <option value="Motorcycle & Motorbike Battery Services">Motorcycle & Motorbike Battery Services</option>
                          <option value="Car Tyre Repair & Replacement">Car Tyre Repair & Replacement</option>
                          <option value="Motorcycle Tyre Assistance">Motorcycle Tyre Assistance</option>
                          <option value="Emergency Roadside Rescue">Emergency Roadside Rescue</option>
                          <option value="Vehicle Breakdown Assistance">Vehicle Breakdown Assistance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Current Location in Singapore *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Block 481 Jurong West St 41, or PIE near Jurong canal"
                        className={`w-full rounded-xl border bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none ${
                          errors.location ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                        }`}
                      />
                      {errors.location && <p className="text-[11px] text-red-400 mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Details or Symptoms (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="e.g. Battery flat after hazard lights remained on; rear tire punctured by nail..."
                        className="w-full rounded-xl border border-slate-700 bg-[#050A14] px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-6 py-4 text-sm font-bold text-white transition-colors shadow-xl shadow-red-950/60 border border-red-500/40"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Service Request</span>
                    </button>

                  </form>
                )}

              </div>

            </div>

            {/* Right Column: Address, Google Map & Operational Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address Card */}
              <div className="rounded-3xl border border-slate-800/90 bg-[#09111D] p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                  <Compass className="h-4 w-4" />
                  <span>Headquarters & Operational Base</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">
                    {BUSINESS_INFO.shortName}
                  </h3>
                  <p className="text-sm text-slate-200 flex items-start gap-2 pt-1">
                    <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{BUSINESS_INFO.address}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>{BUSINESS_INFO.operatingHours}</span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-3xl border border-slate-800/90 bg-[#09111D] p-3 shadow-2xl overflow-hidden">
                <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-slate-800">
                  <iframe
                    title="24Hrs Emergency Rescue Jurong West Singapore Map"
                    src="https://maps.google.com/maps?q=Jurong+West+Street+41,+Block+481,+Singapore+640481&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 text-xs text-slate-400 flex items-center justify-between">
                  <span>Jurong West Street 41, Block 481</span>
                  <span>Singapore 640481</span>
                </div>
              </div>

              {/* Clear Emergency Assistance CTA Box */}
              <div className="rounded-3xl border border-red-800/60 bg-gradient-to-br from-red-950/60 via-[#0A1220] to-[#0A1220] p-6 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Immediate Rescue Action</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Have an urgent vehicle breakdown right now?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Avoid waiting for form responses. Tap the hotline button below to connect straight with our duty dispatch technician in Singapore.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition-colors shadow-lg shadow-red-950/70"
                >
                  <Phone className="h-4 w-4 animate-pulse" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
