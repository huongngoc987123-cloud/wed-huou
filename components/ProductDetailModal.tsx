'use client';

import React from 'react';
import { Product } from '@/types';
import { X, Sparkles, ShieldCheck, CheckCircle2, Clock, MapPin, Award, PhoneCall } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141221] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left: Image & Certifications */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-square">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono uppercase font-semibold bg-black/70 text-[#ffb1c4] border border-[#FF007F]/40 backdrop-blur-md">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Micro certificate banner */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Tiêu Chuẩn Kiểm Định DNA &amp; Dược Tính</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                100% lô sản phẩm được truy xuất nguồn gốc DNA cá thể hươu và kiểm định chỉ số IGF-1 tại phòng thí nghiệm trung tâm.
              </p>
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#ffb1c4] font-mono uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Thượng Hạng VĐ VIỆT</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {product.name}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {product.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/5">
              {product.description}
            </p>

            {/* Features List */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Đặc Điểm &amp; Ưu Thế Nổi Bật:
              </h4>
              <ul className="space-y-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#ff4a8d] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage & Usage */}
            {product.dosage && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Liều Dùng Khuyên Dùng</span>
                  </div>
                  <p className="text-xs text-slate-300">{product.dosage}</p>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Nguồn Gốc Thu Hoạch</span>
                  </div>
                  <p className="text-xs text-slate-300">{product.origin || 'Trang trại VĐ VIỆT'}</p>
                </div>
              </div>
            )}

            {/* Usage instruction note */}
            {product.usageInstructions && (
              <div className="text-xs text-slate-400 italic bg-black/30 p-3 rounded-xl border border-white/5">
                <span className="font-semibold text-slate-300 not-italic">Hướng dẫn dùng: </span>
                {product.usageInstructions}
              </div>
            )}

            {/* CTA buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquire(product.name);
                }}
                className="w-full btn-gradient py-3 px-6 rounded-xl text-xs font-semibold text-white shadow-lg shadow-[#FF007F]/25 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Liên Hệ Đặt Hàng &amp; Nhận Báo Giá</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
