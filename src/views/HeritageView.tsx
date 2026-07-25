import React from 'react';
import { CORE_VALUES } from '../data/mockData';
import { Sparkles, ShieldCheck, Award, Heart, Leaf, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';

interface HeritageViewProps {
  onInquire: (interest: string) => void;
}

export const HeritageView: React.FC<HeritageViewProps> = ({ onInquire }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF007F]/10 border border-[#FF007F]/30 text-xs font-mono font-semibold text-[#ffb1c4]">
          <Sparkles className="w-3.5 h-3.5 text-[#ff4a8d]" />
          <span>Hành Trình Gìn Giữ Di Sản 15+ Năm</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Di Sản Nhung Hươu Việt Nam
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Tự hào gìn giữ nguồn gen hươu sao thuần chủng Hương Sơn, tôn vinh nghệ thuật y học cổ truyền và định hình chuẩn mực mới cho dòng dược liệu cao cấp.
        </p>
      </div>

      {/* Main Story Hero Block */}
      <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#141124] p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ffb1c4] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#ff4a8d]" />
              <span>Cội Nguồn &amp; Triết Lý VĐ VIỆT</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Gắn Kết Thiên Nhiên Với Khoa Học Hiện Đại
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Thương hiệu VĐ VIỆT (VIETDZ - Ethereal Harvest) được thành lập với mục tiêu đưa sản phẩm nhung hươu Việt Nam sánh ngang các thương hiệu dược liệu hàng đầu Châu Á. Chúng tôi tin rằng giá trị thực sự nằm ở sự minh bạch, tình yêu thiên nhiên và quy trình kiểm định nghiêm ngặt.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-serif font-bold text-sm text-white">
                "Nhung hươu không chỉ là sản phẩm bổ dưỡng, đó là linh hồn của sự hồi sinh và năng lượng sống thuần khiết."
              </h4>
              <p className="text-xs text-slate-400">
                — Hội Đồng Nghiên Cứu &amp; Phát Triển Dược Liệu VĐ VIỆT
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block text-sm">100% Thuần Chủng</span>
                <span className="text-slate-400">Nguồn gen hươu sao Hương Sơn quý hiếm</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-cyan-300 block text-sm">Truy Xuất DNA</span>
                <span className="text-slate-400">Định danh từng cá thể hươu thu hoạch</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[3/4]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcYq4ib4qDseB-R7Qb773yBtotxdxAnhQd3F5CanM_B5xrAo8aooUIRn6ZfqUbjfPWRcShsFWjfRsQeORwCg_YmEf25B181tLPO57ZuuXrXTSF48OY5FIfCx4ovUtjdwdLETR5ky0eRP_3UjrwlhiB7K8AyKLkOwEVjP8B4H7GmxhpMWtp_NzIU1EuAofPciXSut45yeKuu2zziCS1Jp5P4U_J0NPGYYs3CjJC7AEPdRW5BtibB2a8f-pc0g54PI_Q7W1FcAXSwJM"
                alt="Bộ sưu tập di sản nhung hươu VĐ VIỆT"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white text-center">
          Cột Mốc Phát Triển
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="font-mono text-2xl font-bold text-[#ff4a8d]">2010</span>
            <h4 className="font-bold text-sm text-white">Khởi Đầu Bảo Tồn</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thành lập trang trại quy mô ban đầu 50 cá thể hươu sao tại vùng đất Hương Sơn, Hà Tĩnh.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="font-mono text-2xl font-bold text-purple-400">2016</span>
            <h4 className="font-bold text-sm text-white">Đạt Chuẩn VietGAP</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Toàn bộ quy trình chăm sóc và chế biến đạt chứng nhận an toàn chăn nuôi tiêu chuẩn quốc gia.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="font-mono text-2xl font-bold text-cyan-400">2020</span>
            <h4 className="font-bold text-sm text-white">Công Nghệ Sấy Nano</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Đầu tư nhà máy sấy thăng hoa nhiệt độ âm -40°C giúp lưu giữ 99% dược chất tự nhiên.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
            <span className="font-mono text-2xl font-bold text-emerald-400">2024+</span>
            <h4 className="font-bold text-sm text-white">Hệ Sinh Thái Smart Farm</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ứng dụng cảm biến sinh học AI và phủ sóng 500+ trang trại vệ tinh liên kết trên toàn quốc.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#FF007F]/20 to-[#0D0B18] border border-white/15 text-center space-y-5">
        <h3 className="font-serif text-2xl font-bold text-white">
          Trở Thành Một Phần Của Hành Trình Di Sản
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Đồng hành cùng VĐ VIỆT trong sứ mệnh phát triển ngành nông nghiệp công nghệ cao và nâng tầm sức khỏe cộng đồng.
        </p>

        <button
          onClick={() => onInquire('Đăng ký tham quan trang trại di sản')}
          className="btn-gradient px-8 py-3 rounded-full text-xs font-semibold text-white shadow-xl flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Đăng Ký Tham Quan Trang Trại</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
