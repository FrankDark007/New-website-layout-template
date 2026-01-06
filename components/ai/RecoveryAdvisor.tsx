import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const RecoveryAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello. I am the Flood Doctor Recovery Advisor. How can I help you with your emergency today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Simple heuristic response logic
    setTimeout(() => {
      let botResponse = "I recommend calling our 24/7 emergency line immediately for that issue.";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes('mold')) {
        botResponse = "Mold can spread within 48 hours. Is the affected area larger than 10 square feet?";
      } else if (lower.includes('cost') || lower.includes('price')) {
        botResponse = "Restoration costs vary by insurance coverage. We work with all major carriers. Would you like to schedule a free estimate?";
      } else if (lower.includes('pipe') || lower.includes('burst') || lower.includes('leak')) {
        botResponse = "Active leaks are a Category 1 or 2 emergency. Please shut off your main water valve immediately. Do you need help locating it?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 bg-slate-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 transition-all duration-300 origin-bottom-right flex flex-col ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`} style={{ maxHeight: '600px', height: '80vh' }}>
        
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Bot size={20} />
            </div>
            <div>
              <h4 className="font-bold">Recovery Advisor</h4>
              <p className="text-xs text-slate-300 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Actions */}
        <div className="p-4 bg-white border-t border-slate-100">
           {/* Quick Suggestion Chips if needed */}
           
           <div className="flex gap-2">
             <input 
               type="text" 
               className="flex-1 bg-slate-100 border-0 rounded-full px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
               placeholder="Type a message..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
             />
             <button 
               onClick={handleSend}
               className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
             >
               <Send size={18} />
             </button>
           </div>
           
           <div className="mt-3 pt-3 border-t border-slate-100 flex justify-center">
              <a href="tel:8774970007" className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1">
                <Phone size={12} /> Emergency? Call (877) 497-0007
              </a>
           </div>
        </div>
      </div>
    </>
  );
};
