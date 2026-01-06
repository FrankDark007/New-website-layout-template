import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_LIST } from '../../constants';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-24 md:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <span className="text-xl">+</span>
              </div>
              <span className="font-bold text-white text-xl">
                Flood<span className="text-blue-500">Doctor</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Northern Virginia's premier emergency restoration specialists. 
              We combine clinical precision with 24/7 rapid response to save your property.
            </p>
            <div className="flex gap-4">
               {/* Badges mockups */}
               <div className="h-10 w-16 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white">IICRC</div>
               <div className="h-10 w-16 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white">BBB</div>
               <div className="h-10 w-16 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white">EPA</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Emergency Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">24/7 Helpline</p>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold text-lg hover:text-blue-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">HQ Location</p>
                  <p className="text-white">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Service Area</h3>
            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
              <span>Fairfax</span> • <span>Arlington</span> • <span>Alexandria</span> • <span>Vienna</span> • <span>McLean</span> • <span>Reston</span> • <span>Loudoun</span> • <span>Prince William</span>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.license}<br/>
                &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
