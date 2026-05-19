import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vietnam Direct — Thư Mời Nhà Máy | 100B Beyond Borders',
  description:
    'Build Better Series. 7 ngày. 10–13 nhà máy được tuyển chọn. Gặp trực tiếp các nhà phát triển BĐS tại Texas. Cơ hội đơn hàng 500 triệu USD.',
  icons: {
    icon: '/logos/Favicon%20100B.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    title: 'Vietnam Direct — Thư Mời Nhà Máy',
    description:
      'Build Better Series. 7 ngày. 10–13 nhà máy được tuyển chọn. Gặp trực tiếp các nhà phát triển BĐS tại Texas. Cơ hội đơn hàng 500 triệu USD.',
    siteName: '100B Beyond Borders',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
