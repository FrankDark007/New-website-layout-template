import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/ui/Card';
import { ShieldCheck, Award, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        <div className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Restoring More Than Just Property</h1>
              <p className="text-xl text-slate-300">
                Founded in {COMPANY_INFO.founded}, Flood Doctor was built on a simple premise: 
                Treat every home like it's our own, and every client like a patient in need of urgent care.
              </p>
           </div>
           {/* Abstract Background */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
           
           {/* Mission Grid */}
           <div className="grid md:grid-cols-3 gap-8 mb-24">
              <Card className="text-center" padding="lg">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={32} />
                 </div>
                 <h3 className="font-bold text-xl mb-3">Clinical Precision</h3>
                 <p className="text-slate-500">We don't guess. We use thermal cameras, moisture meters, and hygrometers to make data-driven decisions.</p>
              </Card>
              <Card className="text-center" padding="lg">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award size={32} />
                 </div>
                 <h3 className="font-bold text-xl mb-3">Certified Expertise</h3>
                 <p className="text-slate-500">Every technician is IICRC certified. We invest heavily in continuous training on the latest restoration technology.</p>
              </Card>
              <Card className="text-center" padding="lg">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart size={32} />
                 </div>
                 <h3 className="font-bold text-xl mb-3">Compassionate Care</h3>
                 <p className="text-slate-500">Disasters are stressful. We handle the cleanup and the insurance paperwork so you can focus on your family.</p>
              </Card>
           </div>

           {/* Stats / Team Placeholder */}
           <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   When you call Flood Doctor, you aren't getting a franchise call center. You are getting a local, Vienna-based team that knows Northern Virginia homes inside and out. 
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <p className="text-4xl font-bold text-slate-900 mb-1">60<span className="text-blue-600 text-2xl">min</span></p>
                       <p className="text-sm text-slate-500 uppercase">Response Time</p>
                    </div>
                    <div>
                       <p className="text-4xl font-bold text-slate-900 mb-1">100<span className="text-blue-600 text-2xl">%</span></p>
                       <p className="text-sm text-slate-500 uppercase">Satisfaction Guarantee</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative">
                    {/* Placeholder for team photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                       Team Photo
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </Layout>
  );
};
