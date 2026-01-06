import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { FloodRiskRadar } from '../components/ai/FloodRiskRadar';
import { SERVICES_LIST, COMPANY_INFO, CITIES } from '../constants';
import { ArrowRight, Star, Clock, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES_LIST[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-4 pb-16 lg:pb-24 pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              60-Minute Response
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Restoring Calm to <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Chaos.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Medical-grade water damage restoration for Northern Virginia. 
              We diagnose, treat, and cure your property's water issues with clinical precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => window.location.href=`tel:${COMPANY_INFO.phoneRaw}`}>
                Call Now
              </Button>
              <Link to="/contact">
                 <Button variant="secondary" size="lg">
                    Get Quote
                 </Button>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-blue-600" size={18} />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                4.9 Google Rating
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Abstract visual or image would go here. Using AI Radar as feature element */}
            <div className="relative z-10 transform lg:translate-x-12">
               <FloodRiskRadar />
               {/* Decorative card behind */}
               <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-slate-200 rounded-[32px] rotate-3 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <div className="border-y border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {/* IICRC Certified */}
             <div className="flex flex-col items-center text-center gap-3">
               <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center border border-slate-100">
                 <Award size={28} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-lg">IICRC Certified</p>
                 <p className="text-sm text-slate-500">Master Water Restorer</p>
               </div>
             </div>

             {/* Licensed */}
             <div className="flex flex-col items-center text-center gap-3">
               <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center border border-slate-100">
                 <ShieldCheck size={28} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-lg">Licensed & Insured</p>
                 <p className="text-sm text-slate-500">{COMPANY_INFO.license}</p>
               </div>
             </div>

             {/* Response Time */}
             <div className="flex flex-col items-center text-center gap-3">
               <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center border border-slate-100">
                 <Clock size={28} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-lg">60-Min Response</p>
                 <p className="text-sm text-slate-500">24/7 Emergency Service</p>
               </div>
             </div>

             {/* Rating */}
             <div className="flex flex-col items-center text-center gap-3">
               <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center border border-slate-100">
                 <Star size={28} />
               </div>
               <div>
                 <p className="font-bold text-slate-900 text-lg">4.9/5 Rating</p>
                 <p className="text-sm text-slate-500">Based on 500+ Reviews</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Specialized Treatments</h2>
            <p className="text-slate-600">Our technicians are certified in the latest IICRC protocols for all categories of property damage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service) => (
              <div 
                key={service.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <Card className="h-full transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg" hover bordered>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold text-sm">
                    View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">The Recovery Protocol</h2>
              <p className="text-slate-600 mb-8 text-lg">
                We follow a strict medical-style triage process to stabilize your property and prevent secondary damage.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: '1. Rapid Assessment', desc: 'Thermal imaging diagnosis to locate hidden moisture pockets.' },
                  { title: '2. Water Extraction', desc: 'Industrial-grade submersible pumps remove standing water immediately.' },
                  { title: '3. Structural Drying', desc: 'Desiccant dehumidifiers remove deep-seated moisture from framing.' },
                  { title: '4. Reconstruction', desc: 'Full restoration to pre-loss condition, handled by our build team.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-[32px] overflow-hidden bg-slate-100 relative">
                  <img 
                    src="https://picsum.photos/800/800?grayscale" 
                    alt="Restoration Process" 
                    className="object-cover w-full h-full mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/50">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 text-green-700 rounded-full">
                           <Clock size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-slate-500">Average Job Completion</p>
                           <p className="text-xl font-bold text-slate-900">3.5 Days</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Serving Northern Virginia</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((city) => (
              <span key={city.name} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                {city.name}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact">
               <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50">
                  Check Service Availability
               </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
