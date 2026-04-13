import React, { createContext, useContext, useState } from 'react';

// --- MOCK PRODUCTS DATABASE ---
const INITIAL_PRODUCTS = [
  {
    id: '1',
    sellerName: 'Aama Sita Paudel',
    sellerId: 's1',
    sellerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    title: 'Homemade Organic Gundruk & Pickles',
    description: 'Freshly dried Gundruk made using traditional Nepalese techniques and perfectly fermented homemade mixed vegetable pickles.',
    price: 450,
    category: 'Cooking',
    rating: 4.8,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  },
  {
    id: '2',
    sellerName: 'Radha Shrestha',
    sellerId: 's2',
    sellerAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80',
    title: 'Handcrafted Dhaka Weave Handbags',
    description: 'Beautiful, durable, and culturally rich tote bags made from authentic Nepali Dhaka fabric. Perfect for gifts and daily use.',
    price: 1250,
    category: 'Stitching',
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  },
  {
    id: '3',
    sellerName: 'Parbati Tamang',
    sellerId: 's3',
    sellerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    title: 'Reliable Morning Childcare & Playtime',
    description: 'Loving, nurturing, and secure babysitting service for toddlers in the local community. Focused on learning and active play.',
    price: 350,
    category: 'Childcare',
    rating: 5.0,
    reviewsCount: 18,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  },
  {
    id: '4',
    sellerName: 'Kamala Gurung',
    sellerId: 's4',
    sellerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    title: 'Custom Tailored Kurta & Blouse Design',
    description: 'Made-to-measure tailoring for all your ethnic and modern wear. Premium stitching with exact fits according to your preferences.',
    price: 1800,
    category: 'Stitching',
    rating: 4.7,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  },
  {
    id: '5',
    sellerName: 'Mina Rai',
    sellerId: 's5',
    sellerAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80',
    title: 'Fresh Homemade Momo & Sel Roti',
    description: 'Authentic Nepali momos with secret family spice blend and crispy Sel Roti made fresh every morning. Taste of home delivered.',
    price: 550,
    category: 'Cooking',
    rating: 4.9,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  },
  {
    id: '6',
    sellerName: 'Durga Maharjan',
    sellerId: 's6',
    sellerAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
    title: 'Hand-Knitted Wool Sweaters & Scarves',
    description: 'Warm, beautiful hand-knitted woolen sweaters and scarves in traditional Nepali patterns. Perfect for winter gifting.',
    price: 2200,
    category: 'Stitching',
    rating: 4.6,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1584736286279-0b9e2d3e6e5c?auto=format&fit=crop&w=600&q=80',
    scannerImage: ''
  }
];

const AppContext = createContext(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const addProduct = (p) => {
    setProducts((prev) => [p, ...prev]);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const addToCart = (product) => {
    // Block guests
    if (!user) {
      alert('Please sign up or login first to add products to your cart!');
      setActiveTab('register');
      return;
    }
    // Block sellers
    if (user.role === 'homemaker') {
      alert('Sellers cannot add products to cart. Please login as a consumer to buy.');
      return;
    }
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.product.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const placeOrder = (shippingAddress, paymentMethod) => {
    if (!user) {
      alert('Please sign up or login to place an order!');
      setActiveTab('register');
      return;
    }
    if (user.role === 'homemaker') {
      alert('Sellers cannot complete purchases. Only consumers can buy.');
      return;
    }

    const newOrder = {
      id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      items: [...cart],
      total: cartTotal,
      status: 'Paid & Processing via ' + paymentMethod,
      date: new Date().toLocaleDateString(),
      buyerName: user.name || 'Guest Consumer',
      shippingAddress
    };

    // Trigger Notification to Seller
    cart.forEach((item) => {
      const notification = {
        id: 'NOTIF-' + Math.floor(1000 + Math.random() * 9000),
        sellerId: item.product.sellerId,
        message: `🛒 New Order! ${user.name || 'Consumer'} ordered "${item.product.title}" (${item.quantity}x) via ${paymentMethod}. Total: Rs. ${item.product.price * item.quantity}.`,
        date: new Date().toLocaleTimeString(),
        read: false
      };
      setNotifications((prev) => [notification, ...prev]);
    });

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setActiveTab('orderConfirmation');
  };

  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const login = (u) => {
    setUser(u);
    setActiveTab(u.role === 'homemaker' ? 'sellerDashboard' : 'home');
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    setActiveTab('home');
  };

  return (
    <AppContext.Provider
      value={{
        products,
        addProduct,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartTotal,
        user,
        updateUser,
        login,
        logout,
        orders,
        notifications,
        markNotificationRead,
        clearNotifications,
        placeOrder,
        activeTab,
        setActiveTab,
        aiChatOpen,
        setAiChatOpen,
        supportOpen,
        setSupportOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
