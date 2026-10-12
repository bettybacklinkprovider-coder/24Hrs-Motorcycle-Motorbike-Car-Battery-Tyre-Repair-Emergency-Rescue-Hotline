/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EmergencyStickyBar } from './components/EmergencyStickyBar';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function getRouteFromPathname(pathname: string): PageRoute {
  if (pathname === '/services') return 'services';
  if (pathname === '/about') return 'about';
  if (pathname === '/contact') return 'contact';
  return 'home';
}

function getPathnameFromRoute(route: PageRoute): string {
  switch (route) {
    case 'services':
      return '/services';
    case 'about':
      return '/about';
    case 'contact':
      return '/contact';
    case 'home':
    default:
      return '/';
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    return getRouteFromPathname(window.location.pathname);
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getRouteFromPathname(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title for SEO on each page
  useEffect(() => {
    const baseTitle = '24Hrs Motorcycle Motorbike Car Battery & Tyre Repair Emergency Rescue Hotline';
    switch (currentRoute) {
      case 'services':
        document.title = `Our Services · ${baseTitle}`;
        break;
      case 'about':
        document.title = `About Us · ${baseTitle}`;
        break;
      case 'contact':
        document.title = `Contact & Location · ${baseTitle}`;
        break;
      case 'home':
      default:
        document.title = `24/7 Roadside Assistance Singapore · ${baseTitle}`;
        break;
    }
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    const targetPath = getPathnameFromRoute(route);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (defaultService?: string) => {
    setModalDefaultService(defaultService);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050B14] text-slate-100 selection:bg-red-800 selection:text-white pb-14 sm:pb-12">
      {/* Sticky Navigation Bar adhering to Top Bar Contract */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Multi-Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentRoute === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentRoute === 'contact' && <ContactPage />}
      </main>

      {/* Luxury Footer with consistent layout across all 4 pages */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick Emergency Hotline Sticky Bar */}
      <EmergencyStickyBar />

      {/* Emergency Assistance Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultService={modalDefaultService}
      />
    </div>
  );
}
