import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileStickyCTA } from './MobileStickyCTA';
import { RecoveryAdvisor } from '../ai/RecoveryAdvisor';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>
      <RecoveryAdvisor />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};
