'use client';

import React from 'react';
import { SOLUTIONS } from '@/data/mockData';
import { useAppContext } from '@/context/AppContext';
import {
  Cpu,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Radio,
  BarChart3,
} from 'lucide-react';

export default function SolutionsPage() {
  const { openContactModal } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300">
          <Cpu className="w-3.5 h-3.5" />
          <span>Hệ Sinh Thái Trang Trại Hươu 4.0</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Giải Pháp Nông Nghiệp &amp; Chuyển Giao Công Nghệ
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Tối ưu hóa năng suất thu hoạch nhung hươu, quản lý tự động bằng cảm
          biến sinh học và xây dựng chuỗi cung ứng khép kín bền vững.
        </p>
      </div>

      {/* Bento Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">
            Cảm Biến Sinh Học IoT
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Gắn thiết bị theo dõi nhịp tim, nhiệt độ và tần suất vận động của
            từng cá thể hươu, phát hiện sớm dấu hiệu bất thường 24/7.
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">
            Dự Báo Điểm Nhung Đỉnh
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Thuật toán AI phân tích chu kỳ tăng trưởng của gạc nhung, cảnh báo
            chính xác thời điểm thu hoạch đạt dồi dào dưỡng chất IGF-1 nhất.
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Sprout className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-white">
            Khẩu Phần Ăn Vi Sinh
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Công thức phối trộn cỏ chăn nuôi cùng vi sinh hữu cơ độc quyền VĐ
            VIỆT giúp hươu tăng trưởng 20% thể trọng tự nhiên.
          </p>
        </div>
      </div>

      {/* Comprehensive Solutions Showcase */}
      <div className="space-y-10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white border-l-4 border-cyan-400 pl-4">
          Chương Trình Hợp Tác &amp; Chuyển Giao Công Nghệ
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={sol.imageUrl}
                  alt={sol.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {sol.targetAudience}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {sol.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-300 mt-1">
                    {sol.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sol.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Các Hạng Mục Triển Khai Chính:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  {sol.roiStat && (
                    <div className="px-3.5 py-2 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                      ⚡ Năng suất: {sol.roiStat}
                    </div>
                  )}

                  <button
                    onClick={() => openContactModal(sol.title)}
                    className="btn-gradient px-6 py-2.5 rounded-xl text-xs font-semibold text-white shadow-lg shadow-[#FF007F]/20 flex items-center gap-2"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
