import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-3">
      <a 
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 bg-slate-900 text-white rounded-full h-12 flex items-center justify-center font-bold text-sm gap-2 active:scale-95 transition-transform"
      >
        <Phone size={18} />
        Emergency Call
      </a>
      <a 
        href="/contact"
        className="flex-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full h-12 flex items-center justify-center font-bold text-sm gap-2 active:scale-95 transition-transform"
      >
        <CalendarCheck size={18} />
        Get Quote
      </a>
    </div>
  );
};
