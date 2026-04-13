import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaShoppingBasket, FaTrash } from 'react-icons/fa';
import { LucideCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CART PAGE ---
export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, placeOrder, user, setActiveTab } = useAppContext();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('eSewa');

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-8">Shopping Cart & Checkout</h2>
      </motion.div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center border border-slate-100 shadow-sm">
          <FaShoppingBasket className="text-5xl text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">Your cart is empty</h3>
          <p className="text-slate-400 text-sm mb-6">Support your local homemakers by adding products!</p>
          <button
            onClick={() => setActiveTab('services')}
            className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{item.product.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">by {item.product.sellerName}</p>
                  <p className="text-sm font-bold text-purple-600 mt-1">Rs. {item.product.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, -1)}
                    className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-sm flex items-center justify-center transition"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-slate-800 w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, 1)}
                    className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-sm flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <span className="font-extrabold text-slate-800 text-sm whitespace-nowrap">
                  Rs. {item.product.price * item.quantity}
                </span>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-rose-400 hover:text-rose-600 hover:bg-rose-50 p-2 rounded-xl transition"
                >
                  <FaTrash className="text-sm" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Checkout Panel */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 h-fit shadow-sm space-y-5 sticky top-24">
            <h3 className="font-bold text-lg text-slate-800 border-b border-slate-100 pb-3">Order Summary</h3>

            {/* Shipping Address */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5">Shipping Address *</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your address details"
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {['eSewa', 'Fonepay', 'COD'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPaymentMethod(mode)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                      paymentMethod === mode
                        ? 'bg-purple-50 border-purple-400 text-purple-700'
                        : 'border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 border-t border-slate-100 pt-4">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span>Rs. {cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Delivery</span>
                <span className="text-teal-600 font-bold">Free</span>
              </div>
              <hr className="border-slate-100" />
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Total</span>
                <span className="text-2xl font-extrabold text-slate-800">Rs. {cartTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (!address) {
                  alert('Please provide your shipping address!');
                  return;
                }
                placeOrder(address, paymentMethod);
              }}
              disabled={user?.role === 'homemaker'}
              className={`w-full font-bold py-3.5 rounded-xl shadow-lg transition-all duration-200 ${
                user?.role === 'homemaker'
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-teal-500 text-white hover:opacity-90 hover:shadow-xl'
              }`}
            >
              {user?.role === 'homemaker' ? 'Sellers Cannot Buy' : 'Place Order & Pay'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- ORDER CONFIRMATION ---
export const OrderConfirmation = () => {
  const { setActiveTab } = useAppContext();

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100"
      >
        <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <LucideCheck className="w-10 h-10 text-teal-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Order Placed Successfully!</h2>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          The seller has been instantly notified with your order details and payment preference. Thank you for supporting local homemakers!
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setActiveTab('buyerDashboard')}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-sm transition"
          >
            View Orders
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg hover:opacity-90 transition"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </div>
  );
};
