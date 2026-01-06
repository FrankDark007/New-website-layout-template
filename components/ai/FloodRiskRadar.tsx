import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Search, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export const FloodRiskRadar: React.FC = () => {
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<'low' | 'moderate' | 'high' | null>(null);

  const checkRisk = () => {
    if (!zip) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const riskLevels: ('low' | 'moderate' | 'high')[] = ['low', 'moderate', 'high'];
      const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];
      setResult(randomRisk);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="overflow-hidden border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 shadow-lg !rounded-[32px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
          <Search size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Flood Risk Radar™</h3>
          <p className="text-xs text-slate-500">AI-Powered Property Analysis</p>
        </div>
      </div>

      {!result ? (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-slate-900 leading-tight">Check Your Property's Flood Risk</h4>
          <p className="text-sm text-slate-600">
            Enter your zip code to see historical flood data and real-time risk assessments for your area.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <Button size="sm" onClick={checkRisk} disabled={loading || !zip}>
              {loading ? 'Scanning...' : 'Check Risk'}
            </Button>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in zoom-in duration-300">
          <div className={`p-4 rounded-xl mb-4 flex items-start gap-3 ${
            result === 'low' ? 'bg-green-50 text-green-900' : 
            result === 'moderate' ? 'bg-yellow-50 text-yellow-900' : 
            'bg-red-50 text-red-900'
          }`}>
            {result === 'low' && <CheckCircle className="shrink-0 text-green-600" />}
            {result === 'moderate' && <Info className="shrink-0 text-yellow-600" />}
            {result === 'high' && <AlertTriangle className="shrink-0 text-red-600" />}
            
            <div>
              <p className="font-bold capitalize">{result} Risk Detected</p>
              <p className="text-xs opacity-80 mt-1">
                {result === 'low' ? 'This area has minimal historical flood activity. Standard preventative maintenance recommended.' :
                 result === 'moderate' ? 'Recent storm patterns indicate potential drainage issues in this sector. Inspect sump pumps.' :
                 'This zone is prone to flash flooding. Immediate inspection of backflow valves recommended.'}
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" fullWidth onClick={() => setResult(null)}>
            Check Another Area
          </Button>
          {result !== 'low' && (
             <div className="mt-3 text-center">
                 <a href="/contact" className="text-xs font-bold text-blue-600 hover:underline">Request a Professional Assessment &rarr;</a>
             </div>
          )}
        </div>
      )}
    </Card>
  );
};