'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, PhoneCall, Menu, X, ChevronRight } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useAppContext();

  const navItems: { id: string; label: string; href: string }[] = [
    { id: 'home', label: 'Trang Chủ', href: '/' },
    { id: 'products', label: 'Sản Phẩm', href: '/products' },
    { id: 'solutions', label: 'Giải Pháp 4.0', href: '/solutions' },
    { id: 'heritage', label: 'Di Sản', href: '/heritage' },
    { id: 'news', label: 'Tin Tức', href: '/news' },
  ];

  const activeTab = pathname === '/' ? 'home' : pathname.slice(1);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0D0B18]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF007F] to-[#7928CA] p-[1px] shadow-lg shadow-[#FF007F]/20 group-hover:shadow-[#FF007F]/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0D0B18] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#ff4a8d] group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#ffb1c4] transition-colors">
                VĐ VIỆT
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-[#FF007F]/20 to-[#7928CA]/20 text-[#ffb1c4] font-mono border border-[#FF007F]/30">
                VIETDZ
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
              Tinh Hoa Nhung Hươu Việt
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF007F] to-[#7928CA] -z-10 opacity-90 transition-all" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => openContactModal('Tư vấn tổng thể')}
            className="btn-gradient flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-lg shadow-[#FF007F]/25 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Liên Hệ Tư Vấn</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => openContactModal('Tư vấn tổng thể')}
            className="p-2 rounded-lg bg-[#FF007F]/20 text-[#ffb1c4] border border-[#FF007F]/40"
            aria-label="Liên Hệ"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-200 hover:text-white border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0D0B18]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal('Tư vấn tổng thể');
              }}
              className="w-full btn-gradient flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-xs shadow-lg shadow-[#FF007F]/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Tư Vấn &amp; Đặt Hàng Trực Tiếp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
