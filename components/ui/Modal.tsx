import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const root = document.getElementById('root') || document.body;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-slate-100 flex flex-col">
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 p-6 flex items-center justify-between z-10 shrink-0">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <button 
            onClick={onClose} 
            className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-900"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    root
  );
};
