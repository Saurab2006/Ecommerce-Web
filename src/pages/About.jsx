import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { LucideGlobe, LucideHeart, LucideTarget, LucideUsers, LucideSparkles, LucideTrendingUp, LucideAward, LucideShieldCheck } from 'lucide-react';

const About = () => {
  const { setActiveTab } = useAppContext();

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-bold mb-6">
              <LucideHeart className="w-3.5 h-3.5" /> Our Movement
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              A Global Movement to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                Empower Homemakers
              </span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Across the globe, billions of women manage households with extraordinary skill — cooking, cleaning, stitching, childcare — yet receive zero economic recognition. GharSetu exists to change that narrative forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: LucideTarget,
                title: 'Our Mission',
                desc: 'To provide every homemaker with a digital identity, a marketplace for their skills, and a direct path to financial independence — without leaving home.',
                color: 'from-purple-600 to-purple-400'
              },
              {
                icon: LucideGlobe,
                title: 'Our Vision',
                desc: 'A world where domestic skills are valued equally in the economy. Where every woman who cooks, stitches, or cares for children is recognized as an entrepreneur.',
                color: 'from-teal-500 to-teal-400'
              },
              {
                icon: LucideHeart,
                title: 'Our Values',
                desc: 'Empowerment over charity. Dignity over dependency. Community over competition. Transparency over promises. Action over words.',
                color: 'from-rose-500 to-rose-400'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 bg-gradient-to-tr ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full uppercase tracking-wider">The Problem</span>
              <h2 className="text-3xl font-extrabold text-slate-800 mt-4 mb-6">Invisible Labor, Zero Recognition</h2>
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
                <p>According to the International Labour Organization, <span className="font-bold text-slate-700">women perform 76.2% of total unpaid care work globally</span> — 3.2 times more than men.</p>
                <p>In Nepal alone, millions of women are skilled in cooking, tailoring, knitting, childcare, and home management — yet none of this work is counted in GDP or household income.</p>
                <p>They have no digital identity, no marketplace, no banking access, and no way to monetize their extraordinary skills.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full uppercase tracking-wider">Our Solution</span>
              <h2 className="text-3xl font-extrabold text-slate-800 mt-4 mb-6">GharSetu Bridges the Gap</h2>
              <div className="space-y-3">
                {[
                  { icon: LucideSparkles, text: 'Digital identity and verified seller profiles for every homemaker' },
                  { icon: LucideTrendingUp, text: 'Direct marketplace access — sell products and services to your community' },
                  { icon: LucideAward, text: 'Payment integration via eSewa, Fonepay, and bank QR scanners' },
                  { icon: LucideShieldCheck, text: 'Real-time order notifications and transparent transaction tracking' },
                  { icon: LucideUsers, text: 'Community trust through ratings, reviews, and repeat customers' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100">
                    <div className="bg-teal-100 text-teal-600 p-2 rounded-lg mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Our Impact So Far</h2>
            <p className="text-purple-100 text-sm max-w-md mx-auto">Numbers that represent real lives transformed</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Homemakers Registered' },
              { value: 'Rs. 5Cr+', label: 'Income Generated' },
              { value: '50+', label: 'Districts Covered' },
              { value: '25,000+', label: 'Orders Completed' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-purple-100 text-xs mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Be Part of the Movement</h2>
          <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Every signup, every purchase, every rating — it all adds up. Together we're building an economy that values every hand, every skill, every homemaker.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('register')}
              className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            >
              Join the Movement
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-8 py-3.5 rounded-xl transition"
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
