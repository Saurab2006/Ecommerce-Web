import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LuciferAI from './components/LuciferAI';
import CustomerSupport from './components/CustomerSupport';
import Home from './pages/Home';
import About from './pages/About';
import AuthPage, { AuthGateway } from './pages/Auth';
import Services from './pages/Services';
import { SellerDashboard, BuyerDashboard } from './pages/Dashboard';
import { CartPage, OrderConfirmation } from './pages/Cart';
import Support from './pages/Support';

// --- PAGE CONTENT RENDERER WITH AUTH GUARD ---
const PageContentRenderer = () => {
  const { activeTab, user } = useAppContext();

  // Pages that require login
  const protectedPages = ['services', 'sellerDashboard', 'buyerDashboard', 'cart', 'orderConfirmation'];
  const isProtected = protectedPages.includes(activeTab);

  // If guest tries to access protected page, block them
  if (isProtected && !user) {
    return <AuthGateway />;
  }

  switch (activeTab) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'services':
      return <Services />;
    case 'login':
      return <AuthPage type="login" />;
    case 'register':
      return <AuthPage type="register" />;
    case 'sellerDashboard':
      return <SellerDashboard />;
    case 'buyerDashboard':
      return <BuyerDashboard />;
    case 'cart':
      return <CartPage />;
    case 'orderConfirmation':
      return <OrderConfirmation />;
    case 'support':
      return <Support />;
    default:
      return <Home />;
  }
};

// --- APP ROOT ---
export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <PageContentRenderer />
        </main>
        <Footer />
        <LuciferAI />
        <CustomerSupport />
      </div>
    </AppProvider>
  );
}
