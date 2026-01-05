
import React, { useState, useRef, useEffect } from 'react';
import { chatWithProceres } from '../services/gemini';

const AIProceres: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Bienvenido, joven estudiante. Soy Domingo Faustino Sarmiento. ¿En qué puedo iluminar tu camino hoy sobre la educación en nuestra patria?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedProcer, setSelectedProcer] = useState('D.F. Sarmiento');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await chatWithProceres(userMsg, selectedProcer);
    setMessages(prev => [...prev, { role: 'ai', text: response || '...' }]);
    setLoading(false);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col gap-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 p-6 rounded-xl border border-blue-800/30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="material-icons-round text-primary text-3xl">smart_toy</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Próceres AI</h2>
            <p className="text-sm text-gray-400">Conversa con figuras históricas de la educación.</p>
          </div>
        </div>
        <select 
          value={selectedProcer}
          onChange={(e) => setSelectedProcer(e.target.value)}
          className="bg-gray-900 border-gray-800 rounded-lg text-sm text-primary font-bold focus:ring-primary focus:border-primary"
        >
          <option>D.F. Sarmiento</option>
          <option>Juan Bautista Alberdi</option>
          <option>Juana Manso</option>
        </select>
      </div>

      <div className="flex-1 bg-[#0B1120] border border-gray-800 rounded-xl flex flex-col overflow-hidden shadow-2xl">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-secondary text-white rounded-br-none' 
                  : 'bg-gray-800 text-gray-200 rounded-bl-none border border-gray-700'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 p-4 rounded-2xl rounded-bl-none animate-pulse text-gray-500 text-xs font-bold uppercase tracking-widest">
                {selectedProcer} está escribiendo...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 bg-gray-900/50 border-t border-gray-800">
          <div className="flex gap-4">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={`Pregúntale algo a ${selectedProcer}...`}
              className="flex-1 bg-gray-950 border-gray-800 rounded-xl px-6 py-4 text-sm focus:ring-primary focus:border-primary"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="px-6 py-4 bg-primary text-black font-bold rounded-xl shadow-lg hover:shadow-neon-gold transition-all active:scale-95 disabled:opacity-50"
            >
              <span className="material-icons-round">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIProceres;
