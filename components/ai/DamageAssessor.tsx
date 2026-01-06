import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Camera, Upload, Check, Loader2 } from 'lucide-react';

export const DamageAssessor: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAnalyzing(true);
      // Simulate AI processing
      setTimeout(() => {
        setAnalyzing(false);
        setAnalyzed(true);
      }, 2500);
    }
  };

  return (
    <div className="bg-slate-900 rounded-[32px] p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Camera className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Damage Assessor</h3>
            <p className="text-slate-400 text-sm">Upload a photo for instant classification</p>
          </div>
        </div>

        {!analyzed ? (
          <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center transition-colors hover:border-slate-500 group">
            {analyzing ? (
              <div className="flex flex-col items-center py-4">
                <Loader2 className="animate-spin text-blue-500 mb-4" size={32} />
                <p className="text-sm font-medium">Analyzing structure...</p>
                <p className="text-xs text-slate-500 mt-2">Checking for moisture patterns</p>
              </div>
            ) : (
              <>
                <input 
                  type="file" 
                  id="damage-upload" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <label htmlFor="damage-upload" className="cursor-pointer block">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-colors">
                    <Upload size={20} className="text-slate-300" />
                  </div>
                  <p className="font-medium mb-1">Click to Upload Photo</p>
                  <p className="text-xs text-slate-500">JPG, PNG supported</p>
                </label>
              </>
            )}
          </div>
        ) : (
          <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
            <div className="flex items-center gap-2 mb-3 text-green-400">
              <Check size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Analysis Complete</span>
            </div>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Water Category:</span>
                <span className="font-bold text-yellow-400">Cat 2 (Grey Water)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Est. Migration:</span>
                <span className="font-bold">Mod. Wicking Detected</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Urgency:</span>
                <span className="font-bold text-red-400">High (Action Required)</span>
              </div>
            </div>
            <Button fullWidth onClick={() => window.location.href='/contact'}>
              Request This Service
            </Button>
            <button 
              onClick={() => setAnalyzed(false)}
              className="w-full text-center text-xs text-slate-500 mt-3 hover:text-white"
            >
              Analyze another photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
