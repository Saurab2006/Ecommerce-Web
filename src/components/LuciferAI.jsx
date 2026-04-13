import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaRobot, FaRegTimesCircle } from 'react-icons/fa';
import { LucideSend } from 'lucide-react';

const LuciferAI = () => {
  const { aiChatOpen, setAiChatOpen } = useAppContext();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hey boss! I'm Lucifer — your GharSetu AI co-pilot. Need help listing a product, finding a service, or navigating the platform? Just ask!"
    }
  ]);

  const aiResponses = [
    "Got it, boss! Let me help you set that up. GharSetu makes it super easy to connect with local buyers.",
    "Great question! You can manage your products from the Seller Dashboard. Want me to walk you through it?",
    "No worries! To buy a product, just sign up as a Consumer, browse Products & Services, and add to cart. Easy peasy!",
    "Love the hustle, boss! You can add your eSewa/Bank QR scanner in your seller profile so buyers can pay directly.",
    "Pro tip: Add high-quality photos of your products! It increases buyer trust by 3x. Use your phone gallery to upload.",
    "The About Movement page explains our mission — empowering homemakers with digital identity and financial independence!",
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    const aiReply = {
      role: 'ai',
      content: aiResponses[Math.floor(Math.random() * aiResponses.length)]
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [...prev, aiReply]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!aiChatOpen && (
        <button
          onClick={() => setAiChatOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-2.5 font-bold text-sm hover:scale-105 transition-all duration-200"
        >
          <FaRobot className="text-xl text-teal-400 animate-pulse" />
          <span className="hidden sm:inline">Ask Lucifer AI</span>
        </button>
      )}

      {/* Chat Window */}
      {aiChatOpen && (
        <div className="bg-white w-[340px] h-[420px] rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3.5 flex justify-between items-center">
            <span className="font-bold text-sm flex items-center gap-2">
              <FaRobot className="text-teal-400" />
              Lucifer AI Co-Pilot
            </span>
            <button
              onClick={() => setAiChatOpen(false)}
              className="text-slate-400 hover:text-white transition"
            >
              <FaRegTimesCircle className="text-lg" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'ai' ? 'text-left' : 'text-right'}>
                <span
                  className={`inline-block p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                    msg.role === 'ai'
                      ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm'
                      : 'bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-tr-sm'
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Lucifer anything..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 text-white p-2.5 rounded-xl transition shadow-md"
            >
              <LucideSend className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LuciferAI;
