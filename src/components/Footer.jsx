import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const { setActiveTab } = useAppContext();

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-gradient-to-tr from-purple-500 to-teal-400 w-10 h-10 rounded-xl text-white font-extrabold flex items-center justify-center text-sm">
                GS
              </div>
              <span className="font-extrabold text-xl">GharSetu</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Turning invisible work into visible income. Empowering homemakers with digital identity, financial independence, and market access.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                { label: 'Home', tab: 'home' },
                { label: 'Products & Services', tab: 'services' },
                { label: 'About Movement', tab: 'about' },
                { label: 'Contact Support', tab: 'support' },
              ].map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => { setActiveTab(link.tab); window.scrollTo(0, 0); }}
                    className="hover:text-white transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Homemakers */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">For Homemakers</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li><button onClick={() => setActiveTab('register')} className="hover:text-white transition">Register as Seller</button></li>
              <li><button onClick={() => setActiveTab('sellerDashboard')} className="hover:text-white transition">Seller Dashboard</button></li>
              <li><span>Add Products & Services</span></li>
              <li><span>Upload Payment Scanner</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-slate-300 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>📧 support@gharsetu.com</li>
              <li>📞 +977 9709186391</li>
              <li>📍 Biratnagar, Nepal</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/9779709186391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition"
                >
                  💬 Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 GharSetu. All rights reserved. Built with <FaHeart className="inline text-rose-500 mx-0.5" /> for homemakers everywhere.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
