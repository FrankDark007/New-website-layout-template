import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Clock, User, AlertTriangle, CheckSquare, Phone, Calculator, HelpCircle, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { BlogPost as BlogPostType } from '../types';

// Mock data fetcher
const getPostById = (id: string): BlogPostType | undefined => {
    // In a real app, this would fetch from a CMS
    const GUIDES: BlogPostType[] = [
        {
          id: 'emergency-water-cleanup',
          title: 'Emergency Water Damage Cleanup: First Steps',
          category: 'Emergency',
          layout: 'emergency',
          readTime: '4 min',
          date: 'Oct 24, 2023',
          author: 'Flood Doctor Team',
          image: 'https://picsum.photos/seed/guide1/1200/600'
        },
        {
          id: 'mold-prevention',
          title: 'How to Prevent Mold After Water Damage',
          category: 'Guide',
          layout: 'howto',
          readTime: '6 min',
          date: 'Nov 12, 2023',
          author: 'Dr. Alan Grant',
          image: 'https://picsum.photos/seed/guide2/1200/600'
        },
        {
          id: 'restoration-costs',
          title: 'Water Damage Restoration Costs 2024',
          category: 'Cost',
          layout: 'cost',
          readTime: '5 min',
          date: 'Jan 15, 2024',
          author: 'Sarah Connor',
          image: 'https://picsum.photos/seed/guide3/1200/600'
        },
        {
          id: 'burst-pipe',
          title: 'What To Do When a Pipe Bursts',
          category: 'Emergency',
          layout: 'emergency',
          readTime: '3 min',
          date: 'Dec 05, 2023',
          author: 'Flood Doctor Team',
          image: 'https://picsum.photos/seed/guide4/1200/600'
        }
    ];
    return GUIDES.find(p => p.id === id);
};

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || '');

  if (!post) {
      return (
          <Layout>
              <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                      <h1 className="text-2xl font-bold">Post not found</h1>
                      <Link to="/guides" className="text-blue-600 hover:underline mt-2 block">Back to Guides</Link>
                  </div>
              </div>
          </Layout>
      )
  }

  // --- Layout Renderers ---

  const RenderEmergency = () => (
      <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8 flex items-start gap-4">
             <AlertTriangle className="text-red-500 shrink-0 mt-1" />
             <div>
                <h3 className="font-bold text-red-800 text-lg">Emergency Guide - Act Now</h3>
                <p className="text-red-700 text-sm">Follow these steps immediately to minimize damage. If water level is rising rapidly, evacuate.</p>
             </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-6">{post.title}</h1>
          
          <div className="bg-slate-900 text-white rounded-2xl p-6 mb-12 flex items-center justify-between">
              <div>
                  <p className="text-slate-400 text-sm uppercase font-bold">24/7 Priority Line</p>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-2xl font-bold">{COMPANY_INFO.phone}</a>
              </div>
              <div className="bg-green-500 p-3 rounded-full animate-pulse">
                  <Phone className="text-white" />
              </div>
          </div>

          <div className="space-y-8">
              <section>
                  <h2 className="text-2xl font-bold mb-4">Immediate Actions (First 60 Mins)</h2>
                  <ul className="space-y-3">
                      {['Shut off water main', 'Turn off electricity to affected area (if safe)', 'Move valuables to higher ground', 'Take photos for insurance'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                              <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500" />
                              <span className="font-medium text-slate-800">{item}</span>
                          </li>
                      ))}
                  </ul>
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-green-800 mb-3">DO</h3>
                      <ul className="list-disc list-inside text-green-900 space-y-2 text-sm">
                          <li>Blot wet upholstery</li>
                          <li>Open drawers/cabinets for airflow</li>
                          <li>Remove loose rugs</li>
                      </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-2xl">
                      <h3 className="font-bold text-red-800 mb-3">DON'T</h3>
                      <ul className="list-disc list-inside text-red-900 space-y-2 text-sm">
                          <li>Use vacuum cleaner on water</li>
                          <li>Enter rooms with standing water if power is on</li>
                          <li>Walk on wet carpet more than necessary</li>
                      </ul>
                  </div>
              </section>
          </div>
      </div>
  );

  const RenderHowTo = () => (
      <div className="max-w-3xl mx-auto px-4 py-12">
         <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Step-by-Step Guide</span>
         <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-6">{post.title}</h1>
         
         <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">
             <span className="flex items-center gap-1"><Clock size={16}/> {post.readTime}</span>
             <span className="flex items-center gap-1"><User size={16}/> {post.author}</span>
         </div>

         <div className="bg-blue-50 p-6 rounded-2xl mb-10">
             <h3 className="font-bold text-blue-900 mb-3">What You Need</h3>
             <div className="flex flex-wrap gap-2">
                 {['N-95 Mask', 'Gloves', 'Dehumidifier', 'Moisture Meter', 'Fans'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium shadow-sm">{tag}</span>
                 ))}
             </div>
         </div>

         <div className="space-y-12">
             {[1, 2, 3, 4].map((step) => (
                 <div key={step} className="relative pl-12">
                     <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                         {step}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Step {step} Title Placeholder</h3>
                     <p className="text-slate-600 leading-relaxed mb-4">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                     {step === 2 && (
                         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r text-sm text-yellow-800 my-4">
                             <strong>Expert Tip:</strong> Never paint over mold. It must be physically removed first.
                         </div>
                     )}
                 </div>
             ))}
         </div>
         
         <div className="mt-16 bg-slate-900 text-white p-8 rounded-[32px] text-center">
             <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
             <p className="mb-6 text-slate-300">If the affected area is larger than 10 sq ft, EPA guidelines recommend professional remediation.</p>
             <Button onClick={() => window.location.href='/contact'}>Get a Quote</Button>
         </div>
      </div>
  );

  const RenderCost = () => (
      <div className="max-w-4xl mx-auto px-4 py-12">
         <div className="text-center mb-12">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>
             <p className="text-xl text-slate-600">A transparent breakdown of restoration pricing factors.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-6 mb-12">
             {[
                 { label: 'National Average', val: '$3,291' },
                 { label: 'Typical Range', val: '$1,240 - $5,342' },
                 { label: 'Severe Damage', val: '$10,000+' }
             ].map((stat, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                     <p className="text-slate-500 text-sm mb-2">{stat.label}</p>
                     <p className="text-3xl font-bold text-slate-900">{stat.val}</p>
                 </div>
             ))}
         </div>

         <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
             <div className="p-6 border-b border-slate-100 bg-slate-50">
                 <h3 className="font-bold text-lg">Cost Factors</h3>
             </div>
             <div className="p-6 space-y-4">
                 <details className="group">
                     <summary className="flex justify-between items-center cursor-pointer font-medium text-slate-900">
                         Category of Water (1, 2, or 3)
                         <ChevronRight className="transition-transform group-open:rotate-90" />
                     </summary>
                     <p className="text-slate-600 mt-2 pl-4 text-sm">Clean water is cheapest to clean. Black water (sewage) requires hazmat protocols, increasing cost by 50-100%.</p>
                 </details>
                 <details className="group">
                     <summary className="flex justify-between items-center cursor-pointer font-medium text-slate-900">
                         Class of Destruction
                         <ChevronRight className="transition-transform group-open:rotate-90" />
                     </summary>
                     <p className="text-slate-600 mt-2 pl-4 text-sm">Class 1 affects part of a room. Class 4 involves wet hardwood/stone requiring specialty drying.</p>
                 </details>
             </div>
         </div>

         <div className="flex justify-center">
             <Button size="lg" className="gap-2">
                 <Calculator size={18} /> Request Free Estimate
             </Button>
         </div>
      </div>
  );

  return (
    <Layout>
        {post.layout === 'emergency' && <RenderEmergency />}
        {post.layout === 'howto' && <RenderHowTo />}
        {post.layout === 'cost' && <RenderCost />}
    </Layout>
  );
};
