# 🏠 GharSetu — Turning Invisible Work Into Visible Income

<div align="center">

![GharSetu Banner](https://img.shields.io/badge/GharSetu-Empowering%20Homemakers-purple?style=for-the-badge&logo=home-assistant&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A digital marketplace platform that connects skilled homemakers with local consumers,
enabling women to earn from skills like cooking, stitching, and childcare.**

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 🌟 About The Project

**GharSetu** (meaning "Bridge of Home") is a platform designed to empower homemakers — especially women — by giving them a digital identity, financial independence, and direct market access. Across communities, countless women manage households with extraordinary skill but receive no formal economic recognition. GharSetu changes that.

The platform enables homemakers to list their services and products — from homemade pickles and hand-stitched garments to reliable childcare — and connects them directly with local consumers who value authentic, handcrafted, and trustworthy offerings.

### 🎯 Mission

> "Every homemaker deserves economic recognition. Every skill deserves a market."

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Email Verification** — 6-digit OTP verification during signup
- **Role-Based Access** — Separate experiences for Sellers (Homemakers) and Buyers (Consumers)
- **Protected Routes** — Guests cannot access marketplace, cart, or dashboards without signing up
- **Secure Login** — Session-based authentication with instant role detection

### 🛍️ Marketplace
- **Product & Service Listings** — Browse handcrafted items with images, prices, ratings, and descriptions
- **Category Filters** — Filter by Cooking, Stitching, Childcare, and more
- **Search Functionality** — Find specific products or services instantly
- **Smart Cart System** — Add to cart, update quantities, remove items, and view totals

### 👩‍🍳 Seller (Homemaker) Dashboard
- **Add Products** — Upload product photos directly from device gallery
- **Payment Scanner** — Upload eSewa or Bank QR code for receiving payments
- **Photo Gallery** — Showcase portfolio with multiple uploaded images
- **Live Notifications** — Get instant alerts when a buyer purchases your product
- **Manage Listings** — View and manage all active store offerings
- **Profile Management** — Update avatar, bio, skills, and payment details

### 🛒 Buyer (Consumer) Dashboard
- **Purchase History** — View all past orders with status tracking
- **Profile Management** — Update personal information and avatar
- **Secure Checkout** — Multiple payment options (eSewa, Fonepay, COD)
- **Order Confirmation** — Instant confirmation with order details

### 🤖 Lucifer AI Co-Pilot
- Built-in AI assistant for platform guidance
- Floating chat interface with smart responses
- Helps users navigate services and features

### 📞 Customer Support
- **Floating WhatsApp Button** — Direct messaging to support team
- **Customer Support Panel** — In-app support chat
- **Contact Page** — Full contact form with FAQ section
- **Live Notification System** — Bell icon with real-time order updates

### 🎨 Design & UX
- **Premium UI** — Soft, empowering color palette (Purple, Teal, White)
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Powered by Framer Motion
- **Accessible Design** — Simple UI built for non-tech-savvy users
- **Mobile Navigation** — Slide-out hamburger menu for small screens

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | Frontend UI framework |
| **Vite 5** | Lightning-fast build tool |
| **Tailwind CSS 3** | Utility-first responsive styling |
| **Framer Motion** | Smooth animations and transitions |
| **React Icons** | Icon library (FontAwesome) |
| **Lucide React** | Modern icon components |
| **Context API** | Global state management |
| **JavaScript (JSX)** | Component development |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with notification bell & auth
│   ├── ProductCard.jsx         # Product display cards
│   ├── LuciferAI.jsx           # Floating AI assistant
│   ├── CustomerSupport.jsx     # WhatsApp + support panel
│   └── Footer.jsx              # Professional footer
├── pages/
│   ├── Home.jsx                # Landing page with hero section
│   ├── About.jsx               # About Movement page
│   ├── Auth.jsx                # Login + Register + Email verification
│   ├── Services.jsx            # Product marketplace listing
│   ├── Dashboard.jsx           # Seller & Buyer dashboards
│   ├── Cart.jsx                # Shopping cart & checkout
│   └── Support.jsx             # Customer support & contact
├── context/
│   └── AppContext.jsx          # Global state management
├── App.jsx                     # Main app router
└── main.jsx                    # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gharsetu.git
   cd gharsetu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Demo Credentials

| Action | Details |
|--------|---------|
| **Register** | Use any email and name |
| **Verification Code** | Enter `123456` (mock OTP) |
| **Seller Account** | Select "Homemaker (Seller)" during registration |
| **Buyer Account** | Select "Consumer (Buyer)" during registration |

---

## 🎯 Use Cases

- 👩‍🍳 **Homemakers** can list homemade food, pickles, and snacks
- 🧵 **Tailors** can offer stitching, embroidery, and custom clothing
- 👶 **Caregivers** can provide childcare and babysitting services
- 🛒 **Consumers** can discover and purchase authentic local products
- 💰 **Women entrepreneurs** gain financial independence through digital commerce

---

## 🗺️ Roadmap

- [x] Landing page with hero section
- [x] User authentication with email verification
- [x] Role-based seller and buyer dashboards
- [x] Product listing with category filters
- [x] Shopping cart and checkout system
- [x] Payment integration UI (eSewa, Fonepay, COD)
- [x] Seller notification system
- [x] WhatsApp customer support integration
- [x] AI assistant (Lucifer Co-Pilot)
- [x] Responsive mobile design
- [ ] Backend API with Node.js & Express
- [ ] MongoDB database integration
- [ ] Real email OTP verification
- [ ] Real-time notifications with WebSockets
- [ ] Image upload to cloud storage (Cloudinary)
- [ ] Payment gateway integration (eSewa API)
- [ ] Admin panel for platform management
- [ ] Multi-language support (Nepali & English)

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact & Support

- **WhatsApp**: [+977 9709186391](https://wa.me/9779709186391)
- **Email**: support@gharsetu.com
- **GitHub Issues**: [Report a bug or request a feature](../../issues)

---

<div align="center">

**Built with ❤️ for empowering homemakers across Nepal**

*GharSetu — Because every home skill deserves a marketplace.*

</div>
