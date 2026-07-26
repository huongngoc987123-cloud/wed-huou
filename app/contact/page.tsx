'use client';

import React, { useState } from 'react';
import { InquiryFormState } from '@/types';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    phone: '',
    email: '',
    partnerType: 'consumer',
    productInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gửi thông tin thất bại.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      partnerType: 'consumer',
      productInterest: '',
      message: '',
    });
    setError(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background glowing auras */}
      <div className="glow-aura w-[600px] h-[600px] top-0 -left-48 bg-[#FF007F]/15 rounded-full" />
      <div className="glow-aura w-[500px] h-[500px] bottom-0 -right-48 bg-[#7928CA]/15 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ffb1c4] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Liên Hệ &amp; Hợp Tác</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Kết Nối Cùng{' '}
            <span className="bg-gradient-to-r from-[#ffb1c4] to-[#dbb8ff] bg-clip-text text-transparent">
              VĐ VIỆT
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia R&amp;D và cố vấn trang trại của chúng tôi luôn sẵn sàng
            hỗ trợ bạn. Hãy để lại thông tin để nhận tư vấn chi tiết và nhanh chóng nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-xl font-bold text-white">
                Thông Tin Liên Hệ
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF007F]/15 border border-[#FF007F]/30 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-[#ff4a8d]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Hotline</p>
                    <p className="text-sm text-slate-400">1900 8899</p>
                    <p className="text-sm text-slate-400">0988 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <p className="text-sm text-slate-400">contact@vdviet.vn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Địa Chỉ</p>
                    <p className="text-sm text-slate-400">
                      Khu Công Nghệ Cao, Hương Sơn, Hà Tĩnh
                    </p>
                    <p className="text-sm text-slate-400">Văn phòng: TP. Hà Nội</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Giờ Làm Việc</p>
                    <p className="text-sm text-slate-400">Thứ 2 - Chủ Nhật</p>
                    <p className="text-sm text-slate-400">08:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hoặc ghé thăm văn phòng đại diện của chúng tôi tại Hà Tĩnh và Hà Nội
                  để trải nghiệm trực tiếp sản phẩm và giải pháp.
                </p>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-[#ffb1c4]">50+</p>
                <p className="text-xs text-slate-400 mt-1">Trang Trại Đối Tác</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-cyan-400">15+</p>
                <p className="text-xs text-slate-400 mt-1">Năm Kinh Nghiệm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-white mb-2">
                    Gửi Yêu Cầu Tư Vấn
                  </h2>
                  <p className="text-xs text-slate-400">
                    Tất cả các trường có dấu <span className="text-[#ff4a8d]">*</span> là bắt buộc.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Họ &amp; Tên <span className="text-[#ff4a8d]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Nguyễn Văn An"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Số Điện Thoại <span className="text-[#ff4a8d]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0988123456"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Liên Hệ
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Đối Tượng Liên Hệ <span className="text-[#ff4a8d]">*</span>
                      </label>
                      <select
                        value={formData.partnerType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            partnerType: e.target.value as any,
                          })
                        }
                        className="w-full bg-[#1e1a30] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all"
                      >
                        <option value="consumer">Khách Hàng Mua Dùng Lẻ</option>
                        <option value="farm_partner">Hợp Tác Phát Triển Trang Trại</option>
                        <option value="distributor">Đại Lý &amp; Nhà Phân Phối</option>
                        <option value="investor">Nhà Đầu Tư Nông Nghiệp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Sản Phẩm Hoặc Giải Pháp Quan Tâm
                    </label>
                    <input
                      type="text"
                      value={formData.productInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, productInterest: e.target.value })
                      }
                      placeholder="Nhung Hươu Tươi, Giải pháp Smart Farm..."
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nội Dung Chi Tiết / Yêu Cầu
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Vui lòng để lại ghi chú cụ thể về nhu cầu tư vấn hoặc quy mô trang trại của bạn..."
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F]/30 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-gradient py-3.5 rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#FF007F]/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-[#FF007F]/40"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Đang Gửi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="glass-card rounded-2xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Cảm ơn anh/chị{' '}
                    <strong className="text-white">{formData.fullName}</strong> đã quan tâm
                    đến hệ sinh thái VĐ VIỆT. Đội ngũ cố vấn sẽ liên hệ lại qua SĐT{' '}
                    <strong className="text-cyan-300">{formData.phone}</strong> trong thời
                    gian sớm nhất (thường trong vòng 15 phút).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-sm space-y-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#ff4a8d]" />
                    <span>
                      <strong className="text-slate-400">Nhu cầu:</strong>{' '}
                      {formData.productInterest || 'Tư vấn tổng thể'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                    <span>
                      <strong className="text-slate-400">Đối tượng:</strong>{' '}
                      {formData.partnerType === 'consumer'
                        ? 'Khách hàng'
                        : formData.partnerType === 'farm_partner'
                          ? 'Đối tác trang trại'
                          : formData.partnerType === 'distributor'
                            ? 'Nhà phân phối'
                            : 'Nhà đầu tư'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="btn-gradient px-8 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#FF007F]/25 hover:shadow-[#FF007F]/40 transition-all"
                  >
                    Gửi Yêu Cầu Khác
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
