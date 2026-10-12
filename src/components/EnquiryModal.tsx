import React, { useState } from 'react';
import { X, Phone, CheckCircle2, Send, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Car Battery Jump-Start & Replacement',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    vehicleType: 'Car (Sedan / SUV / Hatchback)',
    location: '',
    serviceRequired: defaultService,
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Singapore contact number';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please state your current location in Singapore';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-red-900/40 bg-[#0A1220] p-6 text-slate-100 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Subtle background red accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-red-900/20 blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950 border border-red-800 text-red-400">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <h3 id="modal-title" className="text-base font-bold text-white">
              Request Emergency Assistance
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 border border-emerald-600 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Rescue Enquiry Received</h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Our dispatch team has received your details. For immediate priority arrival or if you are in an unsafe expressway spot, please call our hotline directly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-950/60"
              >
                <Phone className="h-4 w-4" />
                <span>Call Hotline ({BUSINESS_INFO.phone})</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <p className="text-xs text-slate-400">
              Fill in your location and breakdown details. For critical breakdowns, calling the hotline is always fastest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marcus Tan"
                  className={`w-full rounded-lg border bg-[#050B14] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-400 mt-0.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9181 0419"
                  className={`w-full rounded-lg border bg-[#050B14] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-400 mt-0.5">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Vehicle Type
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-[#050B14] px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Car (Sedan / SUV / Hatchback)">Car (Sedan / SUV / Hatchback)</option>
                  <option value="Motorcycle (Class 2 / 2A / 2B)">Motorcycle (Class 2 / 2A / 2B)</option>
                  <option value="Commercial Van / Lorry">Commercial Van / Lorry</option>
                  <option value="Electric Vehicle (EV)">Electric Vehicle (EV)</option>
                  <option value="Continental / Luxury Car">Continental / Luxury Car</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Service Needed
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-[#050B14] px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Car Battery Jump-Start & Replacement">Car Battery Jump-Start & Replacement</option>
                  <option value="Motorcycle Battery Services">Motorcycle Battery Services</option>
                  <option value="Car Tyre Repair & Replacement">Car Tyre Repair & Replacement</option>
                  <option value="Motorcycle Tyre Assistance">Motorcycle Tyre Assistance</option>
                  <option value="Emergency Roadside Rescue">Emergency Roadside Rescue</option>
                  <option value="Vehicle Breakdown Assistance">Vehicle Breakdown Assistance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Current Location in Singapore *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. PIE near Jurong West Exit / Block 481 multi-storey carpark"
                className={`w-full rounded-lg border bg-[#050B14] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                  errors.location ? 'border-red-500' : 'border-slate-700 focus:border-red-500'
                }`}
              />
              {errors.location && <p className="text-[11px] text-red-400 mt-0.5">{errors.location}</p>}
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Car won't start after parking overnight, battery clicked rapidly"
                className="w-full rounded-lg border border-slate-700 bg-[#050B14] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-700 hover:bg-red-600 px-4 py-2.5 text-xs font-bold text-white transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Rescue Request</span>
              </button>
              
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-red-700/60 bg-red-950/60 px-4 py-2.5 text-xs font-semibold text-red-300 hover:bg-red-900/60 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Or Call Now</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
