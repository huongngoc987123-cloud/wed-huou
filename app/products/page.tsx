'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { useAppContext } from '@/context/AppContext';
import { Sparkles, Search, ShieldCheck } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { setSelectedProduct, openContactModal } = useAppContext();

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const categories = [
    { id: 'all', label: 'Tất Cả Sản Phẩm' },
    { id: 'raw', label: 'Nhung Tươi Chọn Lọc' },
    { id: 'processed', label: 'Rượu & Chế Biến' },
    { id: 'supplement', label: 'Bột Sấy Thăng Hoa' },
    { id: 'heritage', label: 'BST Di Sản Royal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#ffb1c4]">
          <Sparkles className="w-3.5 h-3.5 text-[#ff4a8d]" />
          <span>Danh Mục Dược Liệu Tinh Hoa VĐ VIỆT</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Sản Phẩm Nhung Hươu Cao Cấp
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Được thu hoạch từ đàn hươu sao tuyển chọn, áp dụng công nghệ sấy thăng
          hoa nhiệt độ âm -40°C giúp duy trì hàm lượng IGF-1 và dinh dưỡng sinh
          học nguyên bản.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
              onInquire={(name) => openContactModal(`Sản phẩm: ${name}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-slate-400 text-sm">
            Không tìm thấy sản phẩm phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs text-[#ffb1c4] underline"
          >
            Xóa bộ lọc tìm kiếm
          </button>
        </div>
      )}

      {/* Quality Guarantee Footer */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <strong className="text-white block">Cam Kết Chất Lượng Thật 100%</strong>
            <span>
              Tất cả sản phẩm đều đi kèm tem chống giả, mã QR truy xuất mã DNA
              và chứng nhận kiểm định vệ sinh ATTP.
            </span>
          </div>
        </div>

        <button
          onClick={() => openContactModal('Tư vấn kiểm định & mẫu dùng thử')}
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 shrink-0"
        >
          Yêu Cầu Mẫu Dùng Thử
        </button>
      </div>
    </div>
  );
}
