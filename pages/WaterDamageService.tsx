import React from 'react';
import { Layout } from '../components/layout/Layout';
import { DamageAssessor } from '../components/ai/DamageAssessor';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ChevronRight, Phone, AlertTriangle, Droplets, Check } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const WaterDamageService: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="bg-slate-50">
        {/* Header */}
        <div className="bg-slate-900 text-white pt-16 pb-24 px-4">
          <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">
               <Droplets size={16} /> Service
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
               Water Damage Restoration <br/>
               <span className="text-slate-400">in Northern Virginia</span>
             </h1>
             <p className="text-xl text-slate-300 max-w-2xl mb-8">
               Immediate mobilization for burst pipes, flooding, and leaks. 
               We extract, dry, and verify using medical-grade protocols.
             </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-16 pb-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Sidebar Nav (Sticky) */}
            <div className="lg:col-span-3 hidden lg:block">
               <div className="sticky top-32 space-y-6">
                 <Card padding="sm" className="space-y-1">
                   {[
                     { id: 'overview', label: 'Overview' },
                     { id: 'process', label: 'Our Process' },
                     { id: 'categories', label: 'Water Categories' },
                     { id: 'equipment', label: 'Equipment' },
                     { id: 'risks', label: 'Health Risks' },
                     { id: 'insurance', label: 'Insurance Guide' },
                     { id: 'faq', label: 'FAQ' },
                   ].map((item) => (
                     <button 
                       key={item.id}
                       onClick={() => scrollToSection(item.id)}
                       className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-colors"
                     >
                       {item.label}
                     </button>
                   ))}
                 </Card>

                 <div className="bg-blue-600 rounded-[24px] p-6 text-white text-center shadow-lg shadow-blue-600/30">
                    <p className="font-bold text-lg mb-2">Emergency?</p>
                    <p className="text-blue-100 text-sm mb-4">Live crews are standing by.</p>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="bg-white text-blue-600 py-3 px-6 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                       <Phone size={16} /> {COMPANY_INFO.phone}
                    </a>
                 </div>
               </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-12">
               
               {/* Intro & AI Tool */}
               <section id="overview" className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Speed Matters</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Water damage is progressive. Within minutes, water spreads to other areas of your home. 
                      Within hours, pressed wood swells and disintegrates. Within 48 hours, microbial growth (mold) begins.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Flood Doctor utilizes industry-leading psychrometrics to ensure your property is not just "dry to the touch," but structurally dry.
                    </p>
                  </div>
                  <div>
                    <DamageAssessor />
                  </div>
               </section>

               {/* Process */}
               <section id="process">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                    IICRC S500 Standard Protocol
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="bg-white">
                      <h3 className="font-bold text-lg mb-2">1. Inspection & Safety</h3>
                      <p className="text-slate-500 text-sm">We identify the water source, category, and class. Hazards (electrical, structural) are neutralized.</p>
                    </Card>
                    <Card className="bg-white">
                      <h3 className="font-bold text-lg mb-2">2. Water Extraction</h3>
                      <p className="text-slate-500 text-sm">Truck-mounted units remove up to 95% of standing water. This accelerates drying time significantly.</p>
                    </Card>
                    <Card className="bg-white">
                      <h3 className="font-bold text-lg mb-2">3. Drying & Dehumidification</h3>
                      <p className="text-slate-500 text-sm">Industrial air movers and dehumidifiers remove remaining moisture from air and materials.</p>
                    </Card>
                    <Card className="bg-white">
                      <h3 className="font-bold text-lg mb-2">4. Cleaning & Sanitizing</h3>
                      <p className="text-slate-500 text-sm">We treat restorable items using antimicrobial treatments to remove odors and bacteria.</p>
                    </Card>
                  </div>
               </section>

               {/* Categories */}
               <section id="categories">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Water Categories</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-400 shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Category 1</h3>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded mb-2">Clean Water</span>
                      <p className="text-sm text-slate-500">From a clean source like a broken water supply line or faucet. No substantial risk.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-l-4 border-yellow-400 shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Category 2</h3>
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded mb-2">Grey Water</span>
                      <p className="text-sm text-slate-500">Contains significant contamination. E.g., washing machine overflow, sump pump failure.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                      <h3 className="font-bold text-lg mb-2">Category 3</h3>
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-bold rounded mb-2">Black Water</span>
                      <p className="text-sm text-slate-500">Grossly unsanitary. Sewage, rising flood waters. Requires hazmat protocols.</p>
                    </div>
                  </div>
               </section>

               {/* Insurance */}
               <section id="insurance" className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Insurance Claims Expertise</h2>
                  <p className="text-slate-700 mb-6">
                    Most homeowner policies cover "sudden and accidental" water damage. We use Xactimate® software—the same industry standard insurance adjusters use—to create accurate, transparent estimates that speed up your claim approval.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-xs"><Check /></div>
                      <span className="text-slate-700 font-medium">Direct billing to insurance companies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center text-xs"><Check /></div>
                      <span className="text-slate-700 font-medium">Detailed photo documentation of all damage</span>
                    </li>
                  </ul>
                  <Button onClick={() => window.location.href='/contact'}>Start a Claim</Button>
               </section>

               {/* FAQ */}
               <section id="faq">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                 <div className="space-y-4">
                   {[
                     { q: "How long does the drying process take?", a: "Typically 3 to 5 days, depending on the materials affected and the class of water damage." },
                     { q: "Will I get mold?", a: "Mold can begin growing within 24-48 hours. Rapid extraction and drying is the only way to prevent it." },
                     { q: "Do I need to move out?", a: "Usually no. However, for extensive damage or Category 3 (sewage) situations, temporary relocation may be safest." }
                   ].map((faq, i) => (
                     <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                       <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                       <p className="text-slate-500 text-sm">{faq.a}</p>
                     </div>
                   ))}
                 </div>
               </section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};