import React from 'react';
import { useAppContext } from '../context/AppContext';
import { FaStar, FaPlus, FaLock } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart, user } = useAppContext();

  const isSeller = user?.role === 'homemaker';
  const isGuest = !user;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-[10px] font-bold text-purple-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Seller Info */}
          <div className="flex items-center gap-2 mb-3">
            <img
              src={product.sellerAvatar}
              alt={product.sellerName}
              className="w-6 h-6 rounded-full object-cover border border-purple-200"
            />
            <span className="text-[11px] text-slate-500 font-medium">{product.sellerName}</span>
          </div>

          <h3 className="font-bold text-slate-800 text-sm leading-snug mb-1 line-clamp-2">{product.title}</h3>
          <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
          <div>
            <span className="text-lg font-extrabold text-slate-800">Rs. {product.price}</span>
            <div className="flex items-center gap-1 text-[11px] text-amber-500 mt-0.5">
              <FaStar />
              <span className="font-bold text-slate-500">{product.rating} ({product.reviewsCount})</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={isSeller}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 shadow-md ${
              isSeller
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-teal-500 hover:shadow-lg hover:scale-105 text-white'
            }`}
            title={isSeller ? 'Sellers cannot buy' : isGuest ? 'Sign up to buy' : 'Add to Cart'}
          >
            {isGuest ? <FaLock className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
            {isGuest ? 'Sign Up' : isSeller ? 'Seller' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
