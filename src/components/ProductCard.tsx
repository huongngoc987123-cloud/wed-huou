import React from 'react';
import { Product } from '../types';
import { Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onInquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onInquire,
}) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full border border-white/10 hover:border-[#FF007F]/40 transition-all duration-500">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-black/40">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B18] via-transparent to-transparent opacity-80" />

        {/* Badge tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase bg-black/60 backdrop-blur-md text-[#ffb1c4] border border-[#FF007F]/40 shadow-lg">
            {product.badge}
          </div>
        )}

        {/* Quick view button overlay */}
        <button
          onClick={() => onSelect(product)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        >
          <span className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-medium border border-white/30 shadow-xl backdrop-blur-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Sparkles className="w-3.5 h-3.5 text-[#ff4a8d]" />
            Xem Chi Tiết
          </span>
        </button>
      </div>

      {/* Content body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{product.origin || 'VĐ VIỆT Farm Certified'}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#ffb1c4] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs font-medium text-[#ffb1c4]/80 mb-2.5">
            {product.subtitle}
          </p>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Top key features bullet preview */}
          <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                <Check className="w-3.5 h-3.5 text-[#ff4a8d] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(product)}
            className="text-xs font-medium text-slate-300 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-[#FF007F] transition-all"
          >
            Thông Số Dược Liệu
          </button>

          <button
            onClick={() => onInquire(product.name)}
            className="btn-gradient text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md shadow-[#FF007F]/20 flex items-center gap-1.5"
          >
            <span>Tư Vấn Báo Giá</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
