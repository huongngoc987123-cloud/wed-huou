import React, { useState } from 'react';
import { NavTab } from '../types';
import { Sparkles, Mail, Phone, MapPin, ShieldCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenContact }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-[#07050E] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-300">
      {/* Background glowing aura */}
      <div className="glow-aura w-96 h-96 top-0 left-1/4 bg-[#FF007F]/20 rounded-full" />
      <div className="glow-aura w-96 h-96 bottom-0 right-1/4 bg-[#7928CA]/20 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF007F] to-[#7928CA] p-[1px] shadow-lg shadow-[#FF007F]/20">
                <div className="w-full h-full bg-[#0D0B18] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#ff4a8d]" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  VĐ VIỆT
                </span>
                <p className="text-[10px] uppercase tracking-widest text-[#ffb1c4]">
                  VIETDZ - Ethereal Harvest
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tiên phong kiến tạo hệ sinh thái nông nghiệp công nghệ cao. Kết hợp bảo tồn tinh hoa nhung hươu truyền thống Việt Nam với giải pháp trang trại thông minh 4.0.
            </p>

            {/* Quality Seals */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 22000:2018</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>GMP CERTIFIED</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>VIETGAP FARM</span>
              </div>
            </div>
          </div>

          {/* Nav Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#FF007F] pl-2.5">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-[#ffb1c4] transition-colors"
                >
                  Trang Chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('products')} 
                  className="hover:text-[#ffb1c4] transition-colors"
                >
                  Sản Phẩm Nhung Hươu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('solutions')} 
                  className="hover:text-[#ffb1c4] transition-colors"
                >
                  Giải Pháp Smart Farm
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('heritage')} 
                  className="hover:text-[#ffb1c4] transition-colors"
                >
                  Di Sản &amp; Câu Chuyện
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('news')} 
                  className="hover:text-[#ffb1c4] transition-colors"
                >
                  Tin Tức &amp; Nghiên Cứu
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-cyan-400 pl-2.5">
              Liên Hệ
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#ff4a8d] shrink-0 mt-1" />
                <span>Khu Công Nghệ Cao, Hương Sơn, Hà Tĩnh &amp; TP. Hà Nội</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hotline: 1900 8899 / 0988 123 456</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contact@vdviet.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#7928CA] pl-2.5">
              Bản Tin Tinh Hoa
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Đăng ký nhận báo cáo định kỳ về kỹ thuật chăn nuôi &amp; ưu đãi sản phẩm mới nhất.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F] transition-all pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Đăng ký thành công! Cảm ơn bạn đã đồng hành.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VĐ VIỆT (VIETDZ). Bản quyền thuộc về Tập đoàn Nông nghiệp &amp; Dược liệu VĐ VIỆT.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Bảo mật thông tin</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Điều khoản dịch vụ</a>
            <a href="#cert" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Truy xuất DNA Nhung</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
