import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaShoppingBasket, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { LucideBell } from 'lucide-react';

const Navbar = () => {
  const { cart, user, logout, activeTab, setActiveTab, notifications, markNotificationRead, clearNotifications } = useAppContext();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const unreadCount = notifications.filter((n) => !n.read).length;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const navLinks = [
    { label: 'Home', tab: 'home' },
    { label: 'About Movement', tab: 'about' },
    { label: 'Products & Services', tab: 'services' },
    { label: 'Contact Support', tab: 'support' },
  ];

  const handleNav = (tab) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="bg-gradient-to-tr from-purple-600 to-teal-500 w-10 h-10 rounded-xl text-white font-extrabold flex items-center justify-center text-sm shadow-lg">
              GS
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              GharSetu
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm text-slate-600">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNav(link.tab)}
                className={`hover:text-purple-600 transition-colors duration-200 ${
                  activeTab === link.tab ? 'text-purple-600 font-bold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
            {user && (
              <button
                onClick={() => handleNav(user.role === 'homemaker' ? 'sellerDashboard' : 'buyerDashboard')}
                className={`hover:text-purple-600 transition ${
                  ['sellerDashboard', 'buyerDashboard'].includes(activeTab) ? 'text-purple-600 font-bold' : ''
                }`}
              >
                Dashboard
              </button>
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="relative p-2 text-slate-500 hover:text-purple-600 transition"
                >
                  <LucideBell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {notifOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
                      <span className="font-bold text-sm text-slate-800">Notifications</span>
                      {notifications.length > 0 && (
                        <button
                          onClick={() => { clearNotifications(); setNotifOpen(false); }}
                          className="text-xs text-rose-500 font-bold hover:underline"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <p className="text-slate-400 text-xs p-4 text-center">No notifications yet</p>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            onClick={() => markNotificationRead(n.id)}
                            className={`px-4 py-3 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition ${
                              !n.read ? 'bg-purple-50/50' : ''
                            }`}
                          >
                            <p className="text-xs text-slate-700 leading-relaxed">{n.message}</p>
                            <span className="text-[10px] text-slate-400 mt-1 block">{n.date}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Cart (only for non-sellers) */}
            {user?.role !== 'homemaker' && (
              <button
                onClick={() => {
                  if (!user) {
                    alert('Please sign up or login first to view your cart!');
                    setActiveTab('register');
                    return;
                  }
                  setActiveTab('cart');
                }}
                className="relative p-2 text-slate-500 hover:text-purple-600 transition"
              >
                <FaShoppingBasket className="text-xl" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            )}

            {/* Auth Buttons / User Info */}
            {user ? (
              <div className="hidden sm:flex items-center gap-2.5 bg-slate-50 border border-slate-100 pl-2 pr-3 py-1.5 rounded-full shadow-sm">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-purple-200"
                />
                <span className="text-sm font-bold text-slate-700 max-w-[80px] truncate">{user.name}</span>
                <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {user.role === 'homemaker' ? 'Seller' : 'Buyer'}
                </span>
                <button
                  onClick={logout}
                  className="text-slate-400 hover:text-rose-500 transition"
                  title="Sign out"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('login')}
                  className="text-sm font-bold text-slate-700 hover:text-purple-600 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-4 shadow-lg">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNav(link.tab)}
                className={`text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
                  activeTab === link.tab ? 'bg-purple-50 text-purple-600 font-bold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            {user && (
              <button
                onClick={() => handleNav(user.role === 'homemaker' ? 'sellerDashboard' : 'buyerDashboard')}
                className="text-left px-4 py-3 rounded-xl font-medium text-sm text-slate-600 hover:bg-slate-50"
              >
                Dashboard
              </button>
            )}
            {!user && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleNav('login')}
                  className="flex-1 bg-slate-100 text-slate-700 font-bold py-3 rounded-xl text-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNav('register')}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-3 rounded-xl text-sm"
                >
                  Sign Up
                </button>
              </div>
            )}
            {user && (
              <button
                onClick={() => { logout(); setMobileOpen(false); }}
                className="text-left px-4 py-3 rounded-xl font-medium text-sm text-rose-500 hover:bg-rose-50"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
