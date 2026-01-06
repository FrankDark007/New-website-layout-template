import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/ui/Card';
import { FloodRiskRadar } from '../components/ai/FloodRiskRadar';
import { BookOpen, Clock, AlertOctagon } from 'lucide-react';
import { BlogPost } from '../types';

const GUIDES: BlogPost[] = [
  {
    id: 'emergency-water-cleanup',
    title: 'Emergency Water Damage Cleanup: First Steps',
    category: 'Emergency',
    layout: 'emergency',
    readTime: '4 min',
    date: 'Oct 24, 2023',
    author: 'Flood Doctor Team',
    image: 'https://picsum.photos/seed/guide1/600/400'
  },
  {
    id: 'mold-prevention',
    title: 'How to Prevent Mold After Water Damage',
    category: 'Guide',
    layout: 'howto',
    readTime: '6 min',
    date: 'Nov 12, 2023',
    author: 'Dr. Alan Grant',
    image: 'https://picsum.photos/seed/guide2/600/400'
  },
  {
    id: 'restoration-costs',
    title: 'Water Damage Restoration Costs 2024',
    category: 'Cost',
    layout: 'cost',
    readTime: '5 min',
    date: 'Jan 15, 2024',
    author: 'Sarah Connor',
    image: 'https://picsum.photos/seed/guide3/600/400'
  },
  {
    id: 'burst-pipe',
    title: 'What To Do When a Pipe Bursts',
    category: 'Emergency',
    layout: 'emergency',
    readTime: '3 min',
    date: 'Dec 05, 2023',
    author: 'Flood Doctor Team',
    image: 'https://picsum.photos/seed/guide4/600/400'
  }
];

export const GuidesHub: React.FC = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen pt-12 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Homeowner Resources</h1>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                 <p className="text-lg text-slate-600 mb-8">
                   Expert advice to help you protect your property and navigate the restoration process.
                 </p>
                 {/* Filters */}
                 <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium whitespace-nowrap">All Guides</button>
                    <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium whitespace-nowrap hover:border-blue-500 hover:text-blue-600 transition-colors">Emergency</button>
                    <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium whitespace-nowrap hover:border-blue-500 hover:text-blue-600 transition-colors">Prevention</button>
                    <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium whitespace-nowrap hover:border-blue-500 hover:text-blue-600 transition-colors">Costs</button>
                 </div>
              </div>
              <div className="lg:col-span-1">
                 <FloodRiskRadar />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {GUIDES.map((guide) => (
                <Link key={guide.id} to={`/guides/${guide.id}`}>
                   <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
                      <div className="h-48 bg-slate-200 relative">
                         <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                         <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                guide.category === 'Emergency' ? 'bg-red-500 text-white' : 
                                guide.category === 'Cost' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                            }`}>
                               {guide.category}
                            </span>
                         </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                         <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{guide.title}</h3>
                         <div className="mt-auto flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><Clock size={12} /> {guide.readTime}</span>
                            <span>{guide.date}</span>
                         </div>
                      </div>
                   </Card>
                </Link>
             ))}
          </div>

        </div>
      </div>
    </Layout>
  );
};
