import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { SERVICES_LIST, COMPANY_INFO } from '../constants';
import { Check, CheckCircle2 } from 'lucide-react';

export const ServicesHub: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES_LIST[0] | null>(null);

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        <div className="bg-white border-b border-slate-100 pb-12 pt-10 px-4">
          <div className="max-w-7xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
               Comprehensive restoration solutions for residential and commercial properties. 
               From initial diagnosis to final reconstruction.
             </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="cursor-pointer h-full" onClick={() => setSelectedService(service)}>
                <Card className="flex flex-col h-full" hover bordered>
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 mb-8 flex-grow">{service.desc}</p>
                  <div className="mt-auto">
                     <Button variant="secondary" fullWidth onClick={() => setSelectedService(service)}>View Service Details</Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Service Modal */}
          <Modal 
            isOpen={!!selectedService} 
            onClose={() => setSelectedService(null)}
            title={selectedService?.title || ''}
          >
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    {selectedService && React.createElement(selectedService.icon, { size: 32 })}
                 </div>
                 <div>
                   <p className="text-lg text-slate-600 leading-relaxed">
                     {selectedService?.longDesc}
                   </p>
                 </div>
               </div>
               
               <div className="bg-slate-50 rounded-2xl p-6">
                 <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Features</h4>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {selectedService?.features?.map((feature, idx) => (
                     <li key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="pt-2 flex flex-col sm:flex-row gap-4">
                 <Button fullWidth onClick={() => window.location.href=`tel:${COMPANY_INFO.phoneRaw}`}>
                   Call for Service
                 </Button>
                 <Link to={selectedService?.path || '/services'} className="flex-1" onClick={() => setSelectedService(null)}>
                    <Button variant="secondary" fullWidth>
                       Visit Service Page
                    </Button>
                 </Link>
               </div>
            </div>
          </Modal>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Flood Doctor?</h2>
            <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-slate-200">
               <table className="w-full">
                 <thead>
                   <tr className="bg-slate-50 border-b border-slate-100">
                     <th className="p-6 text-left text-slate-500 font-medium">Feature</th>
                     <th className="p-6 text-center text-blue-600 font-bold text-lg w-1/3">Flood Doctor</th>
                     <th className="p-6 text-center text-slate-400 font-medium w-1/3">Typical Contractor</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   {[
                     ['Response Time', '60 Minutes (Guaranteed)', '2-4 Hours'],
                     ['Certifications', 'IICRC Master Certified', 'Basic or None'],
                     ['Equipment', 'Hospital-Grade HEPA', 'Standard Rentals'],
                     ['Pricing', 'Insurance-Approved Xactimate', 'Arbitrary Estimates'],
                     ['Availability', '24/7/365 Live Crew', 'Voicemail After 5PM']
                   ].map(([feature, us, them]) => (
                     <tr key={feature} className="hover:bg-slate-50/50">
                       <td className="p-6 font-semibold text-slate-900">{feature}</td>
                       <td className="p-6 text-center bg-blue-50/30">
                         <div className="flex items-center justify-center gap-2 font-bold text-slate-900">
                           <Check size={16} className="text-blue-600" />
                           {us}
                         </div>
                       </td>
                       <td className="p-6 text-center text-slate-500">{them}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
