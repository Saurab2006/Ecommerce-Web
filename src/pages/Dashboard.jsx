import React, { useState, useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { FaQrcode, FaCamera, FaTrash, FaImages } from 'react-icons/fa';
import { LucideBell, LucideUserPlus, LucidePackage, LucideTrendingUp, LucideShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

// --- PROFILE SETTINGS WITH GALLERY & SCANNER ---
const ProfileSettings = () => {
  const { user, updateUser } = useAppContext();
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [paymentQR, setPaymentQR] = useState(user?.paymentQR || '');
  const fileInputRef = useRef(null);
  const scannerInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const [gallery, setGallery] = useState(user?.gallery || []);

  // Handle file upload for profile photo
  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle scanner upload
  const handleScannerUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentQR(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle gallery upload (multiple)
  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGallery((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFromGallery = (index) => {
    setGallery((prev) => prev.filter((_, i) => i !== index));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    if (user) {
      updateUser({
        ...user,
        avatar: avatar || user.avatar,
        paymentQR: paymentQR || user.paymentQR,
        gallery: gallery
      });
      alert('Profile updated successfully!');
    }
  };

  if (!user) return null;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <h3 className="font-bold text-lg text-slate-800 mb-5 flex items-center gap-2">
        <LucideUserPlus className="text-purple-600 w-5 h-5" /> Profile Settings
      </h3>

      <form onSubmit={saveProfile} className="space-y-5">
        {/* Profile Photo */}
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-2">Profile Photo</label>
          <div className="flex items-center gap-4">
            <img
              src={avatar || user.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-200"
            />
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-xl text-xs transition"
              >
                <FaCamera className="text-purple-500" /> Upload from Gallery
              </button>
            </div>
          </div>
        </div>

        {/* eSewa/Bank Scanner (Seller Only) */}
        {user.role === 'homemaker' && (
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 flex items-center gap-1.5">
              <FaQrcode className="text-teal-500" /> eSewa / Bank Payment Scanner
            </label>
            <p className="text-[11px] text-slate-400 mb-3">Upload your eSewa or Bank QR code so buyers can pay you directly</p>

            <input
              type="file"
              ref={scannerInputRef}
              onChange={handleScannerUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => scannerInputRef.current?.click()}
              className="flex items-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold px-4 py-2.5 rounded-xl text-xs transition border border-teal-200"
            >
              <FaQrcode /> Upload Scanner from Gallery
            </button>

            {paymentQR && (
              <div className="mt-3 inline-block">
                <span className="text-[10px] text-slate-400 block mb-1">Your Payment Scanner:</span>
                <img
                  src={paymentQR}
                  alt="Payment QR"
                  className="w-32 h-32 object-contain border-2 border-teal-200 rounded-xl shadow-sm"
                />
              </div>
            )}

            <div className="mt-3">
              <label className="block text-[11px] text-slate-400 mb-1">Or paste scanner URL:</label>
              <input
                type="text"
                value={typeof paymentQR === 'string' && paymentQR.startsWith('http') ? paymentQR : ''}
                onChange={(e) => setPaymentQR(e.target.value)}
                placeholder="https://your-scanner-image-url.png"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Gallery (Seller Only) */}
        {user.role === 'homemaker' && (
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2 flex items-center gap-1.5">
              <FaImages className="text-purple-500" /> Your Product Gallery
            </label>
            <p className="text-[11px] text-slate-400 mb-3">Upload photos from your gallery to showcase your work</p>

            <input
              type="file"
              ref={galleryInputRef}
              onChange={handleGalleryUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              type="button"
              onClick={() => galleryInputRef.current?.click()}
              className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold px-4 py-2.5 rounded-xl text-xs transition border border-purple-200"
            >
              <FaImages /> Upload Photos from Gallery
            </button>

            {gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2">
                {gallery.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-20 object-cover rounded-xl border border-slate-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeFromGallery(index)}
                      className="absolute top-1 right-1 bg-rose-500 text-white p-1 rounded-lg opacity-0 group-hover:opacity-100 transition"
                    >
                      <FaTrash className="text-[8px]" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition"
        >
          Save Profile Changes
        </button>
      </form>
    </div>
  );
};

// --- SELLER DASHBOARD ---
export const SellerDashboard = () => {
  const { products, addProduct, notifications, user, orders } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Cooking');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const productImageRef = useRef(null);

  const handleProductImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!title || !price || !image) {
      alert('Please fill in all required fields and upload a product image!');
      return;
    }

    const newProduct = {
      id: 'P-' + Math.floor(1000 + Math.random() * 9000),
      sellerName: user?.name || 'Homemaker',
      sellerId: user?.id || 's-new',
      sellerAvatar: user?.avatar || '',
      title,
      description,
      category,
      price: Number(price),
      rating: 5.0,
      reviewsCount: 0,
      image,
      scannerImage: user?.paymentQR || ''
    };

    addProduct(newProduct);
    setTitle('');
    setDescription('');
    setPrice('');
    setImage('');
    alert('Product listed successfully!');
  };

  const myNotifications = notifications;
  const totalEarnings = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Seller Dashboard</h2>
        <p className="text-slate-500 text-sm mb-8">Manage your products, profile, scanner, and notifications</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Products Listed', value: products.filter(p => p.sellerId === user?.id).length || products.length, icon: LucidePackage, color: 'bg-purple-50 text-purple-600' },
          { label: 'Total Orders', value: orders.length, icon: LucideShoppingCart, color: 'bg-teal-50 text-teal-600' },
          { label: 'Notifications', value: notifications.length, icon: LucideBell, color: 'bg-amber-50 text-amber-600' },
          { label: 'Total Earnings', value: `Rs. ${totalEarnings}`, icon: LucideTrendingUp, color: 'bg-green-50 text-green-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-2`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-xl font-extrabold text-slate-800">{stat.value}</p>
            <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile + Add Product */}
        <div className="lg:col-span-1 space-y-6">
          <ProfileSettings />

          {/* Add Product Form */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-5">Add New Product</h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Homemade Pickles"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your product..."
                  rows={3}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-400 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  >
                    <option value="Cooking">🍳 Cooking</option>
                    <option value="Stitching">🧵 Stitching</option>
                    <option value="Childcare">👶 Childcare</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Price (Rs.) *</label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="250"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Product Image Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Product Photo *</label>
                <input
                  type="file"
                  ref={productImageRef}
                  onChange={handleProductImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => productImageRef.current?.click()}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl text-xs transition w-full justify-center"
                >
                  <FaCamera className="text-purple-500" /> Upload from Gallery
                </button>
                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="mt-3 w-full h-32 object-cover rounded-xl border border-slate-200"
                  />
                )}
                <div className="mt-2">
                  <label className="block text-[11px] text-slate-400 mb-1">Or paste image URL:</label>
                  <input
                    type="text"
                    value={typeof image === 'string' && image.startsWith('http') ? image : ''}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://image-url.jpg"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-3 rounded-xl shadow-lg hover:opacity-90 transition"
              >
                List Product
              </button>
            </form>
          </div>
        </div>

        {/* Right: Notifications + Listings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <LucideBell className="w-5 h-5 text-amber-500" /> Order Notifications
              {myNotifications.length > 0 && (
                <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {myNotifications.length} new
                </span>
              )}
            </h3>
            {myNotifications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-3xl mb-2">🔔</p>
                <p className="text-slate-400 text-sm">No notifications yet. They'll appear here when a buyer orders your product!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto">
                {myNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`border-l-4 p-4 rounded-r-xl transition ${
                      notif.read ? 'bg-slate-50 border-slate-300' : 'bg-teal-50 border-teal-500'
                    }`}
                  >
                    <p className="text-sm text-slate-700 leading-relaxed">{notif.message}</p>
                    <span className="text-[10px] text-slate-400 font-medium mt-1 block">{notif.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Store Listings */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
              <LucidePackage className="w-5 h-5 text-purple-600" /> Your Active Listings
            </h3>
            <div className="space-y-3">
              {products.slice(0, 6).map((p) => (
                <div key={p.id} className="flex items-center gap-4 bg-slate-50 rounded-xl p-3 hover:bg-slate-100 transition">
                  <img src={p.image} alt={p.title} className="w-14 h-14 object-cover rounded-xl" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{p.title}</h4>
                    <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded font-bold">
                      {p.category}
                    </span>
                  </div>
                  <span className="font-extrabold text-slate-800 text-sm whitespace-nowrap">Rs. {p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- BUYER DASHBOARD ---
export const BuyerDashboard = () => {
  const { orders } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Buyer Dashboard</h2>
        <p className="text-slate-500 text-sm mb-8">View your orders and manage your profile</p>
      </motion.div>

      <div className="space-y-6">
        <ProfileSettings />

        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-4">Purchase History</h3>
          {orders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-3xl mb-2">📦</p>
              <p className="text-slate-400 text-sm">No orders yet. Start shopping from local homemakers!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-slate-100 rounded-2xl p-5 hover:shadow-md transition"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <span className="bg-teal-50 text-teal-600 text-[10px] px-2.5 py-1 rounded-full font-bold">
                        {order.status}
                      </span>
                      <p className="font-bold text-slate-800 mt-2">{order.id}</p>
                      <p className="text-xs text-slate-400">{order.date} • {order.shippingAddress}</p>
                      <div className="mt-2 space-y-1">
                        {order.items.map((item, i) => (
                          <p key={i} className="text-xs text-slate-500">
                            • {item.product.title} × {item.quantity}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-extrabold text-slate-800 text-xl">Rs. {order.total}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
