import React, { useState } from 'react';
import { Phone, Menu, X, ShieldAlert } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute; href: string }[] = [
    { label: 'Home', route: 'home', href: '/' },
    { label: 'Our Services', route: 'services', href: '/services' },
    { label: 'About Us', route: 'about', href: '/about' },
    { label: 'Contact Us', route: 'contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#060D1A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group transition-colors"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950/80 border border-red-700/50 text-red-400 group-hover:border-red-600 transition-colors">
            <ShieldAlert className="h-5 w-5 text-red-500" />
          </div>
          <span className="font-extrabold text-slate-100 group-hover:text-red-400 transition-colors">
            24Hrs Rescue <span className="text-red-500">Singapore</span>
          </span>
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.route)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="flex items-center gap-2 rounded-lg bg-red-700 hover:bg-red-600 active:bg-red-800 px-4 py-2.5 text-xs lg:text-sm font-semibold text-white tracking-wide transition-all duration-150 shadow-lg shadow-red-950/50 hover:shadow-red-900/60 whitespace-nowrap shrink-0 border border-red-500/30"
          >
            <Phone className="h-4 w-4 animate-pulse text-white" />
            <span>Hotline: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="flex sm:hidden items-center justify-center h-9 w-9 rounded-lg bg-red-700 text-white"
            aria-label="Call Emergency Hotline"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#07111F] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <a
                  key={item.route}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.route)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-red-950/60 text-white border border-red-900/60 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-950/60 hover:bg-red-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Hotline: {BUSINESS_INFO.phone}</span>
            </a>
            <p className="text-center text-xs text-slate-400 mt-1">
              Jurong West & Islandwide Singapore · 24/7 Roadside Rescue
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
