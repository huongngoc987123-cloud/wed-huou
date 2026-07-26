'use client';

import React from 'react';
import Link from 'next/link';
import { Product, Article } from '@/types';
import { PRODUCTS, SOLUTIONS, ARTICLES, CORE_VALUES } from '@/data/mockData';
import { ProductCard } from '@/components/ProductCard';
import { NewsCard } from '@/components/NewsCard';
import { useAppContext } from '@/context/AppContext';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sprout,
  PhoneCall,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const { setSelectedProduct, setSelectedArticle, openContactModal } =
    useAppContext();

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8">
        {/* Ambient Glowing Background Elements */}
        <div className="glow-aura w-[500px] h-[500px] -top-20 -left-20 bg-[#FF007F]/25 rounded-full" />
        <div className="glow-aura w-[600px] h-[600px] top-1/3 -right-20 bg-[#7928CA]/30 rounded-full" />
        <div className="glow-aura w-[400px] h-[400px] bottom-0 left-1/3 bg-cyan-500/15 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono font-semibold text-[#ffb1c4] shadow-xl">
            <Sparkles className="w-4 h-4 text-[#ff4a8d] animate-pulse" />
            <span>Hệ Sinh Thái Nông Nghiệp &amp; Dược Liệu Tương Lai</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4a8d]" />
          </div>

          {/* Main Title */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15]">
              Tinh Hoa Nhung Hươu Việt
            </h1>
            <p className="font-serif text-xl sm:text-2xl italic text-slate-300 font-normal">
              &amp; Kiến Tạo Trang Trại Thông Minh 4.0
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Kết hợp di sản y học cổ truyền ngàn năm với công nghệ sấy thăng hoa
            nano hiện đại và hệ thống trang trại thông minh giám sát AI.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/products"
              className="btn-gradient px-8 py-3.5 rounded-full text-sm font-semibold text-white shadow-xl shadow-[#FF007F]/25 flex items-center gap-2"
            >
              <span>Khám Phá Sản Phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solutions"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span>Giải Pháp Smart Farm</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Trust Metrics Strip */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                15+
              </div>
              <p className="text-xs text-slate-400 mt-1">Năm Di Sản Bảo Tồn</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-cyan-300">
                500+
              </div>
              <p className="text-xs text-slate-400 mt-1">Trang Trại Liên Kết</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#ffb1c4]">
                99%
              </div>
              <p className="text-xs text-slate-400 mt-1">Dược Tính Giữ Nguyên</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                100%
              </div>
              <p className="text-xs text-slate-400 mt-1">Truy Xuất DNA Nhung</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DI SẢN & TẦM NHÌN (Story Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#18142a] via-[#110e1d] to-[#0A0813] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF007F]/10 border border-[#FF007F]/30 text-xs font-mono font-semibold text-[#ffb1c4]">
                <ShieldCheck className="w-4 h-4 text-[#ff4a8d]" />
                <span>CỘI NGUỒN TINH HOA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Hành Trình Gìn Giữ &amp; Nâng Tầm Giá Trị Nhung Hươu
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Tại VĐ VIỆT, mỗi cặp nhung hươu không chỉ là món quà quý giá từ
                thiên nhiên mà còn là kết tinh của quy trình chăn nuôi chuẩn sinh
                thái, sự tôn trọng sinh học động vật và ứng dụng công nghệ R&amp;D
                tiên tiến nhất.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {CORE_VALUES.map((val) => (
                  <div
                    key={val.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#ffb1c4]">
                      {val.iconName === 'ShieldCheck' && (
                        <ShieldCheck className="w-4 h-4" />
                      )}
                      {val.iconName === 'Cpu' && <Cpu className="w-4 h-4" />}
                      {val.iconName === 'Leaf' && (
                        <Sprout className="w-4 h-4" />
                      )}
                    </div>
                    <h4 className="font-semibold text-xs text-white">
                      {val.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/heritage"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#ffb1c4] hover:text-white transition-colors group"
                >
                  <span>Đọc Toàn Bộ Câu Chuyện Di Sản VĐ VIỆT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/3]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs6TebTJ3CdMjk3LN-vFNN4ZthoK4r3I2olbtUUb2WBmJVUO8xUY-AiePe29_bPl7ay1jn0dpY4DJ6Vgbt-2t9y_dyr44kJ5c3iCnRpVsfRDahZUfUaYfrG2L3X9Octh3jdLbdiR4Q8w4XHAUFuXzM04rqS1eeaRQrNiuixvSRklXAsYHxHepN-Fop_zUGp3cxuroy-mW9tVjbL1LH3MJ-1-EGBjTdF7Kuh4Ns6dhQbxeM1KOEYd6os8wavZ8giXv1QTDqo-U-CpU"
                  alt="Hươu Sao Di Sản VĐ VIỆT"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                  <p className="font-semibold text-white">
                    Trang Trại Hươu Sao Hương Sơn
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Nơi khởi nguồn nguồn gen thuần chủng quý hiếm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM NỔI BẬT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffb1c4] block mb-1">
              Dược Liệu &amp; Thực Phẩm Bổ Dưỡng
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Sản Phẩm Tinh Hoa Chọn Lọc
            </h2>
          </div>

          <Link
            href="/products"
            className="flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
          >
            <span>Xem Tất Cả Sản Phẩm ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={handleSelectProduct}
              onInquire={(name) => openContactModal(`Sản phẩm: ${name}`)}
            />
          ))}
        </div>
      </section>

      {/* 4. GIẢI PHÁP TỔNG THỂ SMART FARM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block">
            Đồng Hành Cùng Bà Con &amp; Nhà Đầu Tư
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Giải Pháp Nông Nghiệp Thông Minh 4.0
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            VĐ VIỆT không chỉ cung cấp sản phẩm cao cấp mà còn hỗ trợ quy trình
            chuyển giao công nghệ chăn nuôi, lắp đặt thiết bị cảm biến và bao
            tiêu đầu ra toàn diện.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row group"
            >
              <div className="md:w-1/2 relative min-h-[240px] overflow-hidden">
                <img
                  src={sol.imageUrl}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase bg-black/70 text-cyan-300 border border-cyan-500/30">
                  {sol.targetAudience}
                </div>
              </div>

              <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400 mb-3">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  {sol.roiStat && (
                    <div className="px-3 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-semibold text-cyan-300 inline-block mb-3">
                      ⚡ {sol.roiStat}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => openContactModal(sol.title)}
                  className="w-full btn-gradient py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2"
                >
                  <span>{sol.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TIN TỨC & BÁO CHÍ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">
              Cập Nhật Mới Nhất
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Tin Tức &amp; Hoạt Động R&amp;D
            </h2>
          </div>

          <Link
            href="/news"
            className="flex items-center gap-2 text-xs font-semibold text-[#ffb1c4] hover:text-white transition-colors"
          >
            <span>Tất Cả Bài Viết ({ARTICLES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <NewsCard
              key={art.id}
              article={art}
              onReadMore={handleSelectArticle}
            />
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-tr from-[#FF007F]/20 via-[#7928CA]/30 to-[#0D0B18] border border-white/20 shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-[#ff4a8d]">
            <PhoneCall className="w-6 h-6 animate-bounce" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-bold text-white">
              Sẵn Sàng Trải Nghiệm Tinh Hoa Nhung Hươu VĐ VIỆT?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hãy liên hệ ngay với chúng tôi để nhận mẫu dùng thử, thông tin
              kiểm định DNA và bảng báo giá chi tiết dành cho cá nhân hoặc trang
              trại đối tác.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={() => openContactModal('Tư vấn tổng thể sản phẩm')}
              className="btn-gradient px-8 py-3.5 rounded-full text-xs font-semibold text-white shadow-xl shadow-[#FF007F]/30 flex items-center gap-2"
            >
              <span>Đăng Ký Tư Vấn Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
