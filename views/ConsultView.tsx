
import React, { useState, useRef, useEffect } from 'react';
import { askArchitect } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface Props {
  onBack: () => void;
}

const ConsultView: React.FC<Props> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello. I'm the System Architect. How can I help you optimize your health today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const aiResponse = await askArchitect(userMessage);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] animate-in fade-in duration-500 bg-gray-50 dark:bg-background-dark">
      <div className="p-4 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 font-bold text-sm">
           <span className="material-symbols-outlined">arrow_back</span>
           Back to Offer
        </button>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Architect Online</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-primary text-white dark:bg-white dark:text-primary rounded-tr-none shadow-md' 
                : 'bg-white dark:bg-surface-dark text-primary dark:text-white border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex gap-1">
                <div className="h-1 w-1 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-1 w-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-1 w-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question about the system..."
            className="flex-1 bg-gray-50 dark:bg-background-dark border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary dark:focus:ring-white transition-all text-primary dark:text-white"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-primary dark:bg-white text-white dark:text-primary p-3 rounded-xl hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-tighter">AI trained on 90-Day Reset Methodology</p>
      </div>
    </div>
  );
};

export default ConsultView;
