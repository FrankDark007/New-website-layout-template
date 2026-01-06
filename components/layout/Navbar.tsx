import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../../constants';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-0'}`}
      >
        <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              <span className="text-xl">+</span>
            </div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">
              Flood<span className="text-blue-600">Doctor</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-900 font-bold text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              24/7 Live
            </a>
            <Button size="sm" onClick={() => window.location.href=`tel:${COMPANY_INFO.phoneRaw}`}>
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 animate-in fade-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4"
              >
                {item.label}
              </Link>
            ))}
            <Button size="lg" fullWidth className="mt-4" onClick={() => window.location.href=`tel:${COMPANY_INFO.phoneRaw}`}>
              <Phone className="mr-2 h-5 w-5" />
              {COMPANY_INFO.phone}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
