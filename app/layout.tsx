import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ClientLayout } from './ClientLayout';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'VĐ VIỆT | Tinh Hoa Nhung Hươu & Giải Pháp Trang Trại',
  description:
    'Kết hợp di sản y học cổ truyền ngàn năm với công nghệ sấy thăng hoa nano hiện đại và hệ thống trang trại thông minh giám sát AI.',
  keywords: ['nhung hươu', 'VĐ VIỆT', 'VIETDZ', 'trang trại thông minh', 'dược liệu cao cấp'],
  openGraph: {
    title: 'VĐ VIỆT | Tinh Hoa Nhung Hươu & Giải Pháp Trang Trại',
    description:
      'Tiên phong kiến tạo hệ sinh thái nông nghiệp công nghệ cao. Kết hợp bảo tồn tinh hoa nhung hươu truyền thống Việt Nam với giải pháp trang trại thông minh 4.0.',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} bg-[#0D0B18] text-[#e5e0f3] font-sans selection:bg-[#ffb1c4]/30 selection:text-[#ffb1c4] antialiased overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
