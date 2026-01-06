import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen pt-12 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Start Your Recovery</h1>
            <p className="text-lg text-slate-600">24/7 Emergency Dispatch • 60-Minute Response Time</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Service</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-1">
                   <label className="text-sm font-medium text-slate-700">Service Needed</label>
                   <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                     <option>Water Damage Emergency</option>
                     <option>Mold Remediation</option>
                     <option>Fire/Smoke Cleanup</option>
                     <option>Sewage Cleanup</option>
                     <option>Other / General Inquiry</option>
                   </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Property Address</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="123 Main St, Vienna VA" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Describe the damage..." />
                </div>

                <Button fullWidth size="lg" className="mt-4">Submit Request</Button>
                <p className="text-xs text-center text-slate-400 mt-4">By submitting, you agree to receive a call/text for service.</p>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
               <Card className="bg-slate-900 text-white" padding="lg">
                  <h3 className="text-xl font-bold mb-6">Immediate Assistance</h3>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-600 rounded-full">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-slate-400 text-sm uppercase tracking-wide">24/7 Emergency Line</p>
                           <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-2xl font-bold hover:text-blue-300 transition-colors">
                              {COMPANY_INFO.phone}
                           </a>
                           <p className="text-sm text-blue-200 mt-1">Live operators, not machines.</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-slate-800 rounded-full">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-slate-400 text-sm uppercase tracking-wide">Email Us</p>
                           <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-medium hover:text-blue-300 transition-colors">
                              {COMPANY_INFO.email}
                           </a>
                        </div>
                     </div>
                  </div>
               </Card>

               <Card>
                  <div className="flex items-center gap-3 mb-4">
                     <MapPin className="text-blue-600" />
                     <h3 className="font-bold text-lg">HQ Location</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{COMPANY_INFO.address}</p>
                  <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden">
                     {/* Fake Map */}
                     <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                        Google Maps Embed
                     </div>
                  </div>
               </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
