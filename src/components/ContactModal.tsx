import React, { useState } from 'react';
import { InquiryFormState } from '../types';
import { X, PhoneCall, CheckCircle2, Sparkles, Send, MapPin, Mail, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductInterest?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialProductInterest = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormState>({
    fullName: '',
    phone: '',
    email: '',
    partnerType: 'consumer',
    productInterest: initialProductInterest,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#141221] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#ffb1c4] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hỗ Trợ Khách Hàng &amp; Đối Tác</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Liên Hệ Tư Vấn &amp; Hợp Tác VĐ VIỆT
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Để lại thông tin, đội ngũ chuyên gia R&amp;D và cố vấn trang trại sẽ liên hệ lại trong vòng 15 phút.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Họ &amp; Tên <span className="text-[#ff4a8d]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Số Điện Thoại <span className="text-[#ff4a8d]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ví dụ: 0988123456"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Liên Hệ
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Đối Tượng Liên Hệ
                  </label>
                  <select
                    value={formData.partnerType}
                    onChange={(e) => setFormData({ ...formData, partnerType: e.target.value as any })}
                    className="w-full bg-[#1e1a30] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF007F]"
                  >
                    <option value="consumer">Khách Hàng Mua Dùng Lẻ</option>
                    <option value="farm_partner">Hợp Tác Phát Triển Trang Trại</option>
                    <option value="distributor">Đại Lý &amp; Nhà Phân Phối</option>
                    <option value="investor">Nhà Đầu Tư Nông Nghiệp</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Sản Phẩm Hoặc Giải Pháp Quan Tâm
                </label>
                <input
                  type="text"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  placeholder="Ví dụ: Nhung Hươu Tươi, Giải pháp Smart Farm..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nội Dung Chi Tiết / Yêu Cầu
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Vui lòng để lại ghi chú cụ thể về nhu cầu tư vấn hoặc quy mô trang trại của bạn..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-gradient py-3 rounded-xl text-xs font-semibold text-white shadow-lg shadow-[#FF007F]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                </button>
              </div>
            </form>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Thời gian làm việc: 08:00 - 21:00 (Tất cả các ngày)
              </span>
              <span className="flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#ff4a8d]" />
                Hotline: 1900 8899
              </span>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Gửi Yêu Cầu Thành Công!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                Cảm ơn ông/bà <strong className="text-white">{formData.fullName}</strong> đã quan tâm đến hệ sinh thái VĐ VIỆT. Đội ngũ cố vấn sẽ liên hệ lại qua SĐT <strong className="text-cyan-300">{formData.phone}</strong> trong thời gian sớm nhất.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-300">
              <div><strong className="text-slate-400">Nhu cầu:</strong> {formData.productInterest || 'Tư vấn tổng thể'}</div>
              <div><strong className="text-slate-400">Đối tượng:</strong> {formData.partnerType}</div>
            </div>

            <button
              onClick={handleReset}
              className="btn-gradient px-8 py-2.5 rounded-xl text-xs font-semibold text-white shadow-lg"
            >
              Hoàn Tất
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
