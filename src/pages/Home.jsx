import React from 'react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUserCheck, FaUserGraduate, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { LucideShieldCheck, LucideSparkles, LucideAward, LucideArrowRight, LucideUsers, LucideGlobe, LucideTrendingUp } from 'lucide-react';

const Home = () => {
  const { setActiveTab } = useAppContext();

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-bold mb-6">
                <LucideSparkles className="w-3.5 h-3.5" />
                Empowering 10,000+ Homemakers Across Nepal
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
                Turning{' '}
                <span className="relative">
                  Invisible Work
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-purple-200/50 -z-10 rounded"></span>
                </span>{' '}
                Into{' '}
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Visible Income.
                </span>
              </h1>

              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                GharSetu bridges local communities with homemakers, offering verified skills in cooking, tailoring, and childcare directly to consumers. Every skill deserves recognition. Every homemaker deserves an income.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('services')}
                  className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  Explore Services <LucideArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className="bg-white border-2 border-slate-200 hover:border-purple-300 text-slate-800 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-10 text-slate-400">
                <div className="flex items-center gap-2">
                  <LucideShieldCheck className="w-5 h-5 text-teal-500" />
                  <span className="text-xs font-bold">Verified Sellers</span>
                </div>
                <div className="flex items-center gap-2">
                  <LucideAward className="w-5 h-5 text-purple-500" />
                  <span className="text-xs font-bold">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHandHoldingHeart className="text-rose-500" />
                  <span className="text-xs font-bold">Community First</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Empowered Homemaker"
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 text-teal-600 p-2.5 rounded-xl">
                    <LucideTrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-800 text-lg">10,000+</p>
                    <p className="text-slate-400 text-[10px] font-medium">Homemakers Empowered</p>
                  </div>
                </div>
              </div>
              {/* Floating Rating Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 text-xs">
                    {[1,2,3,4,5].map(i => <FaStar key={i} />)}
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">2,500+ Happy Customers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Active Homemakers', icon: LucideUsers },
              { value: '25,000+', label: 'Products Sold', icon: LucideTrendingUp },
              { value: '50+', label: 'Districts Covered', icon: LucideGlobe },
              { value: '4.9★', label: 'Average Rating', icon: LucideAward },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-4 mb-3">How GharSetu Works</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">Three simple steps to start earning or shopping from verified local homemakers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: FaUserGraduate,
                title: 'Register & Verify',
                desc: 'Sign up with Gmail verification. Choose your role — Homemaker (Seller) or Consumer (Buyer). Build your digital identity.'
              },
              {
                step: '02',
                icon: FaUserCheck,
                title: 'List or Browse',
                desc: 'Sellers list their skills, products, and upload payment QR scanners. Buyers browse, filter, and discover amazing local offerings.'
              },
              {
                step: '03',
                icon: FaHandHoldingHeart,
                title: 'Earn or Buy',
                desc: 'Consumers purchase directly. Sellers get instant notifications. Payments via eSewa, Fonepay, or Bank transfer. Community grows!'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-[80px] font-extrabold text-slate-50 group-hover:text-purple-50 transition leading-none -mt-2 -mr-2">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-4 mb-3">Built for Real Impact</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">Every feature is designed to empower homemakers and delight consumers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Digital Identity', desc: 'Every homemaker gets a verified digital profile showcasing their skills, ratings, and portfolio.', icon: '🪪' },
              { title: 'eSewa & Bank Payments', desc: 'Sellers upload their QR scanner for eSewa, Fonepay, or bank transfers. Direct payments, no middlemen.', icon: '💳' },
              { title: 'Gallery & Photos', desc: 'Sellers access their device gallery to upload real product photos. Authentic visuals build trust.', icon: '📸' },
              { title: 'Instant Notifications', desc: 'Sellers receive real-time alerts when buyers place orders. Never miss a sale.', icon: '🔔' },
              { title: 'Role-Based Access', desc: 'Sellers manage listings and earnings. Buyers browse, cart, and checkout. Clean separation.', icon: '🔐' },
              { title: 'Community First', desc: 'Reviews, ratings, and community trust scores. Building a marketplace powered by trust.', icon: '🤝' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-4 mb-3">Voices of Empowerment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sita Paudel',
                role: 'Homemaker, Pokhara',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                text: 'GharSetu changed my life. I went from making pickles for my family to earning Rs. 45,000 a month selling them to my community!',
                rating: 5
              },
              {
                name: 'Rajesh Thapa',
                role: 'Consumer, Kathmandu',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                text: 'The quality of homemade products on GharSetu is unmatched. I buy weekly from three different homemakers. Fresh, authentic, and affordable.',
                rating: 5
              },
              {
                name: 'Kamala Gurung',
                role: 'Tailor, Chitwan',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                text: 'As a tailor, I never had access to customers beyond my neighborhood. GharSetu gave me a digital storefront and now I have orders from 5 districts!',
                rating: 5
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <FaQuoteLeft className="text-purple-200 text-2xl mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-purple-200" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-[11px]">{t.role}</p>
                  </div>
                  <div className="ml-auto flex text-amber-400 text-xs">
                    {[...Array(t.rating)].map((_, j) => <FaStar key={j} />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-purple-100 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Whether you're a homemaker looking to earn or a consumer seeking authentic local products — GharSetu is your bridge to a better tomorrow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveTab('register')}
              className="bg-white text-purple-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Join as Homemaker
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className="bg-purple-700/30 border-2 border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Shop as Consumer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
