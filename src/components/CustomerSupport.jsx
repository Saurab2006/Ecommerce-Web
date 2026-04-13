import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaWhatsapp, FaTimes, FaHeadset, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { LucideSend, LucideMessageCircle } from 'lucide-react';

const CustomerSupport = () => {
  const { supportOpen, setSupportOpen } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779709186391"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-2 font-bold text-sm hover:scale-105 transition-all duration-200"
      >
        <FaWhatsapp className="text-xl" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Support Panel Toggle */}
      <button
        onClick={() => setSupportOpen(!supportOpen)}
        className="fixed bottom-24 left-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-200"
        title="Customer Support"
      >
        {supportOpen ? <FaTimes className="text-lg" /> : <FaHeadset className="text-lg" />}
      </button>

      {/* Support Panel */}
      {supportOpen && (
        <div className="fixed bottom-40 left-6 z-50 bg-white w-[340px] rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-5 py-4">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <LucideMessageCircle className="w-4 h-4" /> Customer Support
            </h3>
            <p className="text-purple-100 text-[11px] mt-1">We're here to help you!</p>
          </div>

          <div className="p-4 space-y-4">
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <FaPhone className="text-purple-500" />
                <span>+977 9709186391</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <FaEnvelope className="text-purple-500" />
                <span>support@gharsetu.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Quick Contact Form */}
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center text-xs font-bold">
                ✅ Message sent! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-purple-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-purple-400"
                />
                <textarea
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-purple-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md"
                >
                  <LucideSend className="w-3 h-3" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerSupport;
