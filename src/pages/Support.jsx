import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { LucideSend, LucideMessageCircle, LucideClock, LucideHeart } from 'lucide-react';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
              We're Here To Help
            </span>
            <h1 className="text-4xl font-extrabold text-slate-800 mt-4 mb-4">Customer Support</h1>
            <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              Got questions about GharSetu? Need help with an order or your seller account? We're just a message away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {[
              {
                icon: FaPhone,
                title: 'Call Us',
                detail: '+977 9709186391',
                sub: 'Available 9 AM - 6 PM NST',
                color: 'bg-purple-50 text-purple-600'
              },
              {
                icon: FaEnvelope,
                title: 'Email Us',
                detail: 'support@gharsetu.com',
                sub: 'We reply within 24 hours',
                color: 'bg-teal-50 text-teal-600'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Visit Us',
                detail: 'Biratnagar, Nepal',
                sub: 'GharSetu HQ, Thamel',
                color: 'bg-amber-50 text-amber-600'
              },
              {
                icon: FaWhatsapp,
                title: 'WhatsApp',
                detail: 'Chat Instantly',
                sub: 'Fastest response',
                color: 'bg-green-50 text-green-600',
                link: 'https://wa.me/9779709186391'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                        <p className="text-slate-600 text-xs font-medium">{item.detail}</p>
                        <p className="text-slate-400 text-[10px]">{item.sub}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                        <item.icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                        <p className="text-slate-600 text-xs font-medium">{item.detail}</p>
                        <p className="text-slate-400 text-[10px]">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <LucideMessageCircle className="w-5 h-5 text-purple-600" /> Send Us a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <LucideHeart className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">Our team will get back to you within 24 hours. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5">Message *</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition flex items-center gap-2"
                  >
                    <LucideSend className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* FAQ Section */}
            <div className="mt-8 bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                <LucideClock className="w-5 h-5 text-teal-500" /> Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  { q: 'How do I register as a homemaker?', a: 'Click Sign Up, select Homemaker role, fill in your skills, and verify your email with the 6-digit code.' },
                  { q: 'How do sellers receive payments?', a: 'Sellers upload their eSewa or Bank QR scanner in their profile. Buyers scan and pay directly during checkout.' },
                  { q: 'Can sellers buy products?', a: 'No. Seller accounts are restricted to listing and managing products only. To buy, register as a Consumer.' },
                  { q: 'How are sellers notified of new orders?', a: 'Sellers receive instant notifications on their dashboard whenever a buyer places an order for their product.' },
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                    <h4 className="font-bold text-sm text-slate-800 mb-1">{faq.q}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
