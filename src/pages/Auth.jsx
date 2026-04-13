import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaCheckCircle, FaLock } from 'react-icons/fa';
import { LucideShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// --- AUTH GATEWAY (Blocks guests from protected pages) ---
export const AuthGateway = () => {
  const { setActiveTab } = useAppContext();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white max-w-md w-full p-8 rounded-3xl border border-slate-100 shadow-xl text-center"
      >
        <div className="bg-rose-50 text-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FaLock className="text-2xl" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Sign Up Required</h2>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          You need to create an account or login before you can browse products, add items to cart, or make purchases on GharSetu.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setActiveTab('login')}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl transition"
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 text-white font-bold py-3 rounded-xl shadow-lg transition"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// --- AUTH PAGE (Login & Register with Gmail Verification) ---
const AuthPage = ({ type }) => {
  const { login, setActiveTab } = useAppContext();
  const [role, setRole] = useState('consumer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState('');
  const [password, setPassword] = useState('');

  // Verification states
  const [showVerification, setShowVerification] = useState(false);
  const [code, setCode] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const triggerVerification = (e) => {
    e.preventDefault();
    if (!email || !name) return;
    setShowVerification(true);
  };

  const verifyAndSubmit = (e) => {
    e.preventDefault();
    if (code !== '123456') {
      setVerificationError('Incorrect code. Use mock code: 123456');
      return;
    }

    const newUser = {
      id: 'USR-' + Math.floor(1000 + Math.random() * 9000),
      name: name,
      role: role,
      email: email,
      phone: phone,
      address: address,
      avatar: role === 'homemaker'
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      skills: role === 'homemaker' ? skills.split(',').map((s) => s.trim()) : [],
      paymentQR: '',
      gallery: []
    };

    login(newUser);
  };

  // --- VERIFICATION CODE SCREEN ---
  if (showVerification) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center"
        >
          <FaCheckCircle className="text-5xl text-teal-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Verify Your Email</h2>
          <p className="text-slate-500 text-sm mb-6">
            We've sent a 6-digit code to <span className="font-bold text-slate-700">{email}</span>
            <br />
            <span className="text-xs text-rose-500 font-medium">(Demo code: 123456)</span>
          </p>

          <form onSubmit={verifyAndSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setVerificationError('');
              }}
              required
              maxLength={6}
              className="w-full text-center tracking-[0.5em] font-bold text-2xl py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-purple-500 bg-slate-50"
            />
            {verificationError && (
              <p className="text-rose-500 text-xs font-bold">{verificationError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Verify & Continue
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- MAIN AUTH FORM ---
  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-tr from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <LucideShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-800">
            {type === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {type === 'login' ? 'Login to access your dashboard' : 'Join GharSetu and start your journey'}
          </p>
        </div>

        {/* Role Toggle (only for register) */}
        {type === 'register' && (
          <div className="flex bg-slate-100 p-1.5 rounded-full mb-8">
            <button
              type="button"
              onClick={() => setRole('consumer')}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition ${
                role === 'consumer' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'
              }`}
            >
              🛒 Consumer (Buyer)
            </button>
            <button
              type="button"
              onClick={() => setRole('homemaker')}
              className={`flex-1 py-2.5 rounded-full font-bold text-sm transition ${
                role === 'homemaker' ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow' : 'text-slate-500'
              }`}
            >
              🏠 Homemaker (Seller)
            </button>
          </div>
        )}

        <form
          onSubmit={type === 'register' ? triggerVerification : (e) => {
            e.preventDefault();
            const existingUser = {
              id: 'USR-888',
              name: name || 'GharSetu User',
              role: role,
              email: email || 'user@gharsetu.com',
              phone: '',
              address: '',
              avatar: role === 'homemaker'
                ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
                : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
              skills: role === 'homemaker' ? ['Cooking', 'Stitching'] : [],
              paymentQR: '',
              gallery: []
            };
            login(existingUser);
          }}
          className="space-y-4"
        >
          {type === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">Email Address *</label>
            <input
              type="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
            />
          </div>

          {type === 'register' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Address</label>
                  <input
                    type="text"
                    placeholder="City, District"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                  />
                </div>
              </div>

              {role === 'homemaker' && (
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Your Skills (comma-separated) *</label>
                  <input
                    type="text"
                    placeholder="e.g., Cooking, Stitching, Childcare, Knitting"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Password *</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                />
              </div>
            </>
          )}

          {type === 'login' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-purple-400 transition"
                />
              </div>
              {/* Role toggle for login too */}
              <div className="flex bg-slate-100 p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => setRole('consumer')}
                  className={`flex-1 py-2 rounded-full font-bold text-xs transition ${
                    role === 'consumer' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'
                  }`}
                >
                  Consumer
                </button>
                <button
                  type="button"
                  onClick={() => setRole('homemaker')}
                  className={`flex-1 py-2 rounded-full font-bold text-xs transition ${
                    role === 'homemaker' ? 'bg-purple-600 text-white shadow' : 'text-slate-500'
                  }`}
                >
                  Homemaker
                </button>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:opacity-90 transition mt-4"
          >
            {type === 'register' ? 'Send Verification Code' : 'Login to Dashboard'}
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            {type === 'login' ? (
              <>Don't have an account?{' '}
                <button onClick={() => setActiveTab('register')} className="text-purple-600 font-bold hover:underline">Sign Up</button>
              </>
            ) : (
              <>Already have an account?{' '}
                <button onClick={() => setActiveTab('login')} className="text-purple-600 font-bold hover:underline">Login</button>
              </>
            )}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthPage;
